import { getDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "../../hello";

const db = getFirestore(app);

const getUserById = async (uid) => {
  const userRef = doc(db, "users", uid);
  const user = await getDoc(userRef);
  let output = user.data();
  return output;
};

export default async function handler(req, res) {
  const { uid } = req.query;
  const data = await getUserById(uid);
  res.status(200).json(data);
}
