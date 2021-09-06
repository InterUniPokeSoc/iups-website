import React from "react";
import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import firestore from 'firebase/firestore';
import { FirebaseError } from "firebase/app";

// class Hint {
//   constructor (answer, hint) {
//     this.answer = answer;
//     this.hint = hint;
//   }
// }

async function getHints() {
  const hintsCol = collection(db, 'scavenger-hunt');
  const hintSnapshot = await getDocs(hintsCol);
  var hintsList = hintSnapshot.docs.map(function(doc) {
    return doc.data();
  });
  return hintsList;
}

// export const useGetData = () => {
//   const [documents, setDocuments] = React.useState([]);
//   const db = firebase.firestore();

//   React.useEffect(() => {
//     db.collection("scavenger-hunt")
//       .get()
//       .then((querySnapshot) => {
//         let arr = [];
//         querySnapshot.docs.map((doc) =>
//           arr.push({ id: doc.id, value: doc.data() })
//         );
//         setDocuments(arr);
//       })
//   }, [db]);

//   return documents;
// }

export { getHints };