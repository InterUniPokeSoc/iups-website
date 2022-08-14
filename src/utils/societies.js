import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

import Societies from '../data/societies.json'

async function getSocieties() {

  const data = JSON.stringify({ Societies })
  const json = JSON.parse(data)

  var societiesList = Object.values(json)[0].societies

  return societiesList
}

export { getSocieties };