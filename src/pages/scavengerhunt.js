import React, { useEffect, useState, useRef, useInsertionEffect } from 'react'
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import HCaptcha from "@hcaptcha/react-hcaptcha"
import '../styles/general.scss';
import * as styles from '../styles/scavengerHunt.module.scss';

import Loader from '../components/loader'

import { getHints, getWinners, inputNewWinner } from "../utils/hints";

function ScavengerHuntPage() {

  // List of Hints
  const [hints, setHints] = useState([])

  // List of Winners
  const [winnerAlreadyExists, setWinnerAlreadyExists] = useState([])

  // Current Hint Number
  const [currentHintNo, setCurrentHintNo] = useState(3)

  // User Input
  const [userAnswer, setUserAnswer] = useState("")
  const [answerIncorrect, setAnswerIncorrect] = useState(false)

  const [userDiscordID, setUserDiscordID] = useState("")
  const [userDiscordIDAgreement, setUserDiscordIDAgreement] = useState(false)
  const [discordIDIncorrect, setDiscordIDIncorrect] = useState(false)
  const [userDiscordIDProcessed, setUserDiscordIDProcessed] = useState(false)

  // Show loading animation
  const [isLoading, setIsLoading] = useState(true)

  // Output Messages
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  // Captcha Reference
  const captchaRef = useRef();
  const [userVerifiedHuman, setUserVerifiedHuman] = useState(false)



  /*
    Get Hints from the database and store in hints
  */
  useEffect(() => {
    setIsLoading(true)

    getHints().then((dbList) => {
      var tempHintList = []
  
      Object.values(dbList).map((hint) => {
        tempHintList.push(hint);
      });
  
      setHints(tempHintList)
      setMessage("")
    }).catch((e) => {
      if (e.message.includes("available")) {
        setErrorMessage("There is no Scavenger Hunt currently available.")
      } else {
        setErrorMessage("An error occurred while retrieving the scavenger hunt data. Please contact a member of Comté.")
      }
    }).finally (() => {
      setIsLoading(false)
    })
  }, [])

  /*
    Get Winners from the database and store in winners
  */
  useEffect(() => {
    if (currentHintNo == 0 || currentHintNo < hints.length) {
      return
    }
    
    setIsLoading(true)

    getWinners().then((winnerAlreadyExists) => {
      setWinnerAlreadyExists(winnerAlreadyExists)
    }).catch(() => {
      setErrorMessage("An error occurred while retrieving the scavenger hunt data. Please contact a member of Comté.")
    }).finally (() => {
      setIsLoading(false)
    })
    
  }, [currentHintNo])

  /*
    Manage user responses input
  */
  let questionResponse = () => {
    setAnswerIncorrect(false)

    if (hints[currentHintNo].answers.includes(userAnswer.toLowerCase())) {
      setMessage("Correct! The next hint has been revealed to you.")

      // Increment hint number
      setCurrentHintNo(currentHintNo + 1)
      
      if (currentHintNo >= hints.length) {
        setMessage("Congrats, you've won the Scavenger Hunt! If you were first you can claim the prize!")
      }

      setUserAnswer("")

    } else {
      setAnswerIncorrect(true)
      setMessage("Try again!")
    }
  };

  /*
    Manage user Discord ID input
  */
  let discordIDResponse = () => {
    setDiscordIDIncorrect(false)

    // Assert whether Discord ID is valid
    if (userDiscordID == null || !userDiscordID.match(/^\w+#\d{4}$/g)) {
      setDiscordIDIncorrect(true)
      setMessage("Your Discord username is not valid.")
      return
    }

    // Assert that the checkbox is selected
    if (!userDiscordIDAgreement) {
      setMessage("You need to agree to the storage and publication of your Discord username to continue.")
      return
    }

    // Assert that the user is human
    if (!userVerifiedHuman) {
      setMessage("You need to verify using the captcha.")
      return
    }

    setIsLoading(true)

    inputNewWinner(userDiscordID).then(() => {
      setUserDiscordIDProcessed(true)
      setMessage("Discord ID: " + userDiscordID + " uploaded!")
    }).catch(() => {
      setMessage("An error occurred while processing your Discord username.")
    }).finally (() => {
      setIsLoading(false)
    })
  };

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Scavenger Hunt</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    </Helmet>

    <Layout>
      <main className="page-content">
        <h1 className={["shiny-title", styles.scavengerHuntTitle].join(' ')}>Scavenger Hunt Alpha</h1>

        {/* Loading Indicator */}
        { isLoading &&
          <div className={styles.loader}><Loader /></div>
        }

        <div id={styles.centeredContent}>
        { hints.length > 0 && errorMessage == null && !isLoading &&
          <>
            <section id={styles.hintWrapper}>
              {/* Indicator of Questions */}
              <section id={ styles.indicatorWrapper }>
                {hints.map((element, index) => {
                  return <div className={
                    [(index == currentHintNo ? styles.currentIndicator : ""),
                    (index < currentHintNo ? styles.completedIndicator : ""),
                    styles.indicator
                    ].join(' ')
                  }></div>
                })}
              </section>

              {/* Hint UI */}
              { currentHintNo < hints.length &&
                <>
                  <h2 id={styles.hintTitle} className="medium-title">Hint { currentHintNo + 1 }</h2>
                  <p id={styles.hintText}>{ hints[currentHintNo].hint }</p>
                  <input id={styles.hintInput} className={ answerIncorrect ? styles.error : styles.noError } value={ userAnswer } onInput={ e => setUserAnswer(e.target.value) }></input>
                  <a id={styles.hintButton} onClick={questionResponse}>Check Answer</a>
                  <p id={styles.updateMessage}>{ message }</p>
                </>
              }

              {/* On Hunt Completion UI */}
              { !isLoading && currentHintNo >= hints.length &&
                <>
                  {/* TODO: winnerAlreadyExists ternary is wrong here fix to something like !winnerAlreadyExists */}
                  <h2 id={styles.hintTitle} className={!winnerAlreadyExists ? ['medium-title', 'shiny-title'].join(' ') : "medium-title"}>
                    { !winnerAlreadyExists ? "Congratulations Winner" : "Scavenger Hunt Complete" }
                  </h2>

                  {/* Enter Winner Details UI */}
                  { !winnerAlreadyExists && !userDiscordIDProcessed &&
                    <>
                      <p className={styles.winnerInfo}>Amazing! You were first to complete the Scavenger Hunt!</p>
                      <p className={styles.winnerInfo}>Please enter your Discord username below to confirm your win.</p>
                      <input id={styles.hintInput} className={ discordIDIncorrect ? styles.error : styles.noError } value={ userDiscordID } onInput={ e => setUserDiscordID(e.target.value) }></input>
                      <label className={ styles.discordCheckboxLabel }>
                        <input type="checkbox" className={ styles.discordCheckbox } onChange={ (e) => setUserDiscordIDAgreement(e) } />
                        I agree to have my Discord username stored and published on this website
                      </label>
                      <div className={ styles.captcha }>
                        <HCaptcha
                          ref={captchaRef}
                          sitekey={ 
                            `${process.env.IS_DEVELOPMENT}` == null ? `${process.env.HCAPTCHA_SITE_KEY}`
                            : '10000000-ffff-ffff-ffff-000000000001'
                          }
                          theme="light"
                          onVerify={() => setUserVerifiedHuman(true)}
                        />
                      </div>
                      <a id={styles.hintButton} onClick={discordIDResponse}>Submit</a>
                      <p id={styles.updateMessage}>{ message }</p>
                    </>
                  }

                  {/* Winner Already Exists UI */}
                  { winnerAlreadyExists && !userDiscordIDProcessed &&
                    <p className={styles.winnerInfo}>You have completed the Scavenger Hunt. You may have not been first this time, but there'll be another hunt soon!</p>
                  }

                  {/* Winner Data Added UI */}
                  { userDiscordIDProcessed &&
                    <p className={styles.winnerInfo}>Your winner data has been added { userDiscordID }! Now go and boast about it on the Discord server :).</p>
                  }
                </>
              }
            </section>
          </>
        }
        </div>
        
        {/* Display Error Message */}
        <section className="page-section">
          <p id="error-message" className={ styles.errorMessage }>
            { errorMessage != null ? errorMessage : "" }
          </p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ScavengerHuntPage;