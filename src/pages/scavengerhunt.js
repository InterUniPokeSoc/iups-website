import React, { useEffect, useState, useRef, useInsertionEffect } from 'react'
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import '../styles/general.scss';
import * as styles from '../styles/scavengerHunt.module.scss';

import Loader from '../components/loader'

import {getHints, getWinners} from "../utils/hints";

function ScavengerHuntPage() {

  // List of Hints
  const [hints, setHints] = useState([])

  // Current Hint Number
  const [currentHintNo, setCurrentHintNo] = useState(0)

  // User Input
  const [userAnswer, setUserAnswer] = useState("")
  const [answerIncorrect, setAnswerIncorrect] = useState(false)

  // Show loading animation
  const [isLoading, setIsLoading] = useState(true)

  // Output Messages
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  /*
    Get Hints from the database and store in hints
  */
  useEffect(() => {
    setIsLoading(true)

    getHints().then((dbList) => {
      console.log("DB LIST RETURNED: "+dbList)
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
    Manage user input
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

    } else {
      setAnswerIncorrect(true)
      setMessage("Try again!")
    }
  };

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Scavenger Hunt</title>
    </Helmet>

    <Layout>
      <main className="page-content">

        <h1 className={["shiny-title", "huge-title", styles.scavengerHuntTitle].join(' ')}>Scavenger Hunt</h1>

        {/* Loading Indicator */}
        { isLoading &&
          <Loader center={true} />
        }

        <div id={styles.centeredContent}>
        { hints.length > 0 && errorMessage == null &&
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
              { currentHintNo >= hints.length &&
                <>
                  <h2 id={styles.hintTitle} className="medium-title">Congratulations</h2>
                  <p>You have completed the Treasure Hunt. You may have not been first this time, but there'll be another hunt soon!</p>
                </>
              }
            </section>
          </>
        }
        </div>

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