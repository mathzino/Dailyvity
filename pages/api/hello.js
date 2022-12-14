// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initializeApp } from "firebase/app";
import {
  getDocs,
  doc,
  collection,
  getFirestore,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUsers = async () => {
  const usersRef = collection(db, "users");
  const querySnapshot = await getDocs(usersRef);
  let output = [];
  querySnapshot.forEach((user) => {
    output.push(user.data());
  });
  return output;
};

const getCampaignByUserId = async (uid) => {
  const userRef = collection(db, "users", uid, "campaign");
  const userData = await getDocs(userRef);
  let output = [];
  userData.forEach((campaign) => {
    output.push(campaign.data());
  });
  return output;
};

export default async function handler(req, res) {
  const data = await getCampaignByUserId("tmQvzFuyQsgjgPuPa4jbK2hLYlq2");
  res.status(200).json(data);
}

export { app };
