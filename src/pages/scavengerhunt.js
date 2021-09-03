import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/scavengerHunt.scss';

function ScavengerHuntPage() {

  let hints = [
    "What is the best Pokémon?",
    "Aquire the?",
    "That's very...",
  ];

  let answers = [
    "Quag",
    "Sire",
    "Sus",
  ];

  var currentHintNo = 0;

  let questionResponse = () => {
    var userAnswer = document.getElementById("question-" + currentHintNo + "-input").value;
    var updateMessageBox = document.getElementById("update-message");

    console.log(userAnswer + "     " + answers[currentHintNo]);

    if (userAnswer == answers[currentHintNo]) {
      console.log("Answer is Correct!");
      updateMessageBox.innerHTML = "Correct! The next hint has be revealed to you.";

      // Disable old inputs
      document.getElementById("question-" + currentHintNo + "-button").disabled = true;

      currentHintNo++;
      
      if (currentHintNo < hints.length) {

        // Set new text - previously set to standard text to prevent cheating
        document.getElementById("question-" + currentHintNo + "-text").innerHTML = hints[currentHintNo];

        // Show the new hint and inputs
        document.getElementById("hint-wrapper-" + currentHintNo).classList.remove("hide");
        document.getElementById("hint-wrapper-" + currentHintNo).classList.add("show");
        
      } else {
        console.log("Congrats you've won the prize!");
        updateMessageBox.innerHTML = "Congrats, you've won the Scavenger Hunt! If you were first you can claim the prize!";
      }

    } else {
      console.log("Answer is Incorrect!");
      updateMessageBox.innerHTML = "Try again!";
    }
  };

  return (
    <>
    <Helmet>
      <title>Inter-Uni PokéSoc - Scavenger Hunt</title>
    </Helmet>

    <Layout>
      <main className="page-content">
        <TitleBanner imageSource="" title="Scavenger Hunt" />

        <section className="page-section">

          { hints.map((value, index) => (
            <div key={"hint-wrapper-"+index} id={"hint-wrapper-"+index} className={"hint-wrapper " + (index > 0 ? "hide" : "show")}>
              <h1 className="title">Hint {index+1}</h1>
              <p id={"question-" + index + "-text"}>{index == 0 ? value : "Nice try! The browser inspector isn't going to help you this time!"}</p>
              <input id={"question-" + index + "-input"} type="text"></input>
              <label id={"question-" + index + "-label"}></label>
              <button id={"question-" + index + "-button"} onClick={questionResponse}>Check Answer</button>
            </div>
          ))}

          <p id="update-message"></p>

        </section>

      </main>

    </Layout>
    </>
  );
}

export default ScavengerHuntPage;