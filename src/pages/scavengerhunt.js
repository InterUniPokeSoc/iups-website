import React, { useEffect, useState, useRef } from 'react'
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import '../styles/general.scss';
import '../styles/scavengerHunt.scss';

import {getHints, getWinners} from "../utils/hints";

function ScavengerHuntPage() {

  // List of Hints
  const [hints, setHints] = useState([])

  // Current Hint Number
  const [currentHintNo, setCurrentHintNo] = useState(0)

  // User Input
  const [userAnswer, setUserAnswer] = useState(null)

  // Output Messages
  const [message, setMessage] = useState("Loading...")
  const [errorMessage, setErrorMessage] = useState(null)

  // Get Hints from the database and store in hints
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
  });

  // Manage user input
  let questionResponse = () => {
    var userInputBox = document.getElementById("hint-input");

    if (hints[currentHintNo].answers.includes(userAnswer.toLowerCase())) {
      setMessage("Correct! The next hint has been revealed to you.")

      // Increment hint number
      setCurrentHintNo(currentHintNo + 1)
      
      if (currentHintNo >= hints.length) {
        setMessage("Congrats, you've won the Scavenger Hunt! If you were first you can claim the prize!")
      }

    } else {
      userInputBox.classList.add("error");
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

        { hints.length > 0 &&
          <section className="page-section hint-wrapper">
            <h2 id="hint-title">Hint { currentHintNo + 1 }</h2>
            <p id="hint-text">{ hints[currentHintNo].hint }</p>
            <input id="hint-input" value={ userAnswer } onInput={ e => setUserAnswer(e.target.value) }></input>
            <a id={"hint-button"} onClick={questionResponse}>Check Answer</a>
          </section>
        }

        <section className="page-section" id="info-section">
          <p id="update-message" className={ errorMessage != null ? "error-message" : "" }>
            { errorMessage == null ? message : errorMessage }
          </p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ScavengerHuntPage;