import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore } from "firebase/firestore";

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
    const data = user.data();
    output.push(data);
  });
  return output;
};

export default async function handler(req, res) {
  const data = await getUsers();
  res.status(200).json(data);
}
