import React from "react";
import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import firestore from 'firebase/firestore';
import { FirebaseError } from "firebase/app";

async function getSocieties() {
  const societiesCol = collection(db, 'societies');
  const societiesSnapshot = await getDocs(societiesCol);
  var societiesList = societiesSnapshot.docs.map(function(doc) {
    return doc.data();
  });
  return societiesList;
}

export { getSocieties };