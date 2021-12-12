import React from "react";
import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import firestore from 'firebase/firestore';
import { FirebaseError } from "firebase/app";

async function getHints() {
  const hintsCol = collection(db, 'scavenger-hunt');
  const hintSnapshot = await getDocs(hintsCol);
  var hintsList = hintSnapshot.docs.map(function(doc) {
    return doc.data();
  });
  return hintsList[0];
}

async function getWinners() {
  const hintsCol = collection(db, 'scavenger-hunt');
  const hintSnapshot = await getDocs(hintsCol);
  var winnersList = hintSnapshot.docs.map(function(doc) {
    return doc.data();
  });
  return winnersList[1];
}

export { getHints, getWinners };