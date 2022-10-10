import { getDocs, getFirestore, collectionGroup } from "firebase/firestore";
import { app } from "../../hello";

const db = getFirestore(app);

const getPostById = async (post_id) => {
  const userRef = collectionGroup(db, "posts");
  try {
    const postSnapshot = await getDocs(userRef);
    let output = [];
    postSnapshot.forEach((post) => {
      const data = post.data();
      if (post.id == post_id) output.push(data);
    });
    return output;
  } catch (err) {
    console.log("err", err);
  }
};

export default async function handler(req, res) {
  const { post_id } = req.query;
  try {
    const data = await getPostById(post_id);
    res.status(200).json(data);
  } catch (err) {
    res.json({ err });
  }
}
