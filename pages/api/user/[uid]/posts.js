import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../hello";

const db = getFirestore(app);

const getPostsByUserId = async (uid) => {
  const userRef = collection(db, "users", uid, "posts");
  const userData = await getDocs(userRef);
  let output = [];
  userData.forEach((post) => {
    const data = post.data();
    data.documentID = post.id;
    output.push(data);
  });
  return output;
};

export default async function handler(req, res) {
  const { uid } = req.query;
  const data = await getPostsByUserId(uid);
  res.status(200).json(data);
}
