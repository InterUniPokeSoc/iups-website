import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import firestore from 'firebase/firestore';


async function getHints() {
  const hintsCol = collection(db, 'scavenger-hunt');
  const hintSnapshot = await getDocs(hintsCol);
  const hintsList = hintSnapshot.docs.map(doc => ({
    id: doc.id,
    ... doc.data()
  }));
  return hintsList;
}

export { getHints };