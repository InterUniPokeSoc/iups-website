import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/scavengerHunt.scss';

import {getHints} from "../utils/hints";

function ScavengerHuntPage() {

  var hints = [
    // "What is the best Pokémon?",
    // "Aquire the?",
    // "That's very...",
  ];

  var answers = [
    // "Quag",
    // "Sire",
    // "Sus",
  ];

  var list = getHints().then((dbList) => {
    console.log(dbList[0].hint1.hint);

    Object.values(dbList[0]).map((hint) => {
      hints.push(hint.hint);
      answers.push(hint.answer);
    });

    generateHint();
  });

  var currentHintNo = 0;

  function generateHint() {
    var sectionDiv = document.getElementById("hints-page");
    var hintDiv = document.createElement('div');
    hintDiv.classList = ["hint-wrapper"];

    var hintTitle = document.createElement('h2');
    hintTitle.classList = ["hint-title"];
    hintTitle.innerHTML = "Hint " + (currentHintNo+1);

    var hintText = document.createElement('p');
    hintText.classList = ["hint-text"];
    hintText.id = "hint-text-"+currentHintNo;
    hintText.innerHTML = hints[currentHintNo];

    var hintInput = document.createElement('input');
    hintInput.classList = ["hint-input"];
    hintInput.id = "hint-input-"+currentHintNo;
    hintInput.onchange = (() => { hintInput.classList.remove("error"); });

    hintDiv.appendChild(hintTitle);
    hintDiv.appendChild(hintText);
    hintDiv.appendChild(hintInput);

    sectionDiv.appendChild(hintDiv);
  }


  let questionResponse = () => {
    var userInputBox = document.getElementById("hint-input-"+currentHintNo);
    var userAnswer = document.getElementById("hint-input-"+currentHintNo).value;
    var updateMessageBox = document.getElementById("update-message");

    console.log(userAnswer + "     " + answers[currentHintNo]);

    if (userAnswer == answers[currentHintNo]) {
      console.log("Answer is Correct!");
      updateMessageBox.innerHTML = "Correct! The next hint has been revealed to you.";

      // Disable old inputs
      document.getElementById("hint-input-"+currentHintNo).disabled = true;

      // Increment hint number
      currentHintNo++;
      
      if (currentHintNo < hints.length) {
        generateHint();
      } else {
        console.log("Congrats you've won the prize!");
        updateMessageBox.innerHTML = "Congrats, you've won the Scavenger Hunt! If you were first you can claim the prize!";
      }

    } else {
      userInputBox.classList.add("error");

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
        <TitleBanner imageSource="images/pelipperbg.jpg" title="Scavenger Hunt" />

        <section className="page-section" id="hints-page">
        </section>

        <section className="page-section" id="info-section">
          <a id={"hint-button"} onClick={questionResponse}>Check Answer</a>
          <p id="update-message"></p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ScavengerHuntPage;