import React from 'react';
import {Link, useState, useRef, useEffect} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import TitleBanner from '../components/titleBanner';
import '../styles/general.scss';
import '../styles/scavengerHunt.scss';

import {getHints, getWinners} from "../utils/hints";

function ScavengerHuntPage() {

  var hints = []

  getHints().then((dbList) => {
    Object.values(dbList).map((hint) => {
      hints.push(hint);
    });

    document.getElementById("update-message").innerHTML = "";
    document.getElementById("hint-button").classList.remove("hide");

    generateHint();
  }).catch((e) => {
    if (e.contains("available")) {
      document.getElementById("update-message").innerHTML = "There is no Scavenger Hunt currently available.";
    } else {
      document.getElementById("update-message").innerHTML = "An error occurred while retrieving the scavenger hunt data. Please contact a member of Comté.";
    }

    document.getElementById("update-message").style.fontSize = "1.4em";
    document.getElementById("update-message").style.fontWeight = "bold";
    document.getElementById("update-message").style.color = "red";
    console.log(e);
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
    hintText.innerHTML = hints[currentHintNo].hint;

    var hintInput = document.createElement('input');
    hintInput.classList = ["hint-input"];
    hintInput.id = "hint-input-"+currentHintNo;
    hintInput.onchange = (() => { 
      hintInput.classList.remove("error"); 
      document.getElementById("update-message").innerHTML = "";
    });

    hintDiv.appendChild(hintTitle);
    hintDiv.appendChild(hintText);
    hintDiv.appendChild(hintInput);

    sectionDiv.appendChild(hintDiv);
  }


  let questionResponse = () => {
    var userInputBox = document.getElementById("hint-input-"+currentHintNo);
    var userAnswer = document.getElementById("hint-input-"+currentHintNo).value;
    var updateMessageBox = document.getElementById("update-message");

    if (hints[currentHintNo].answers.includes(userAnswer.toLowerCase())) {
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
          <a id={"hint-button"} className="hide" onClick={questionResponse}>Check Answer</a>
          <p id="update-message">Loading...</p>
        </section>

      </main>

    </Layout>
    </>
  );
}

export default ScavengerHuntPage;