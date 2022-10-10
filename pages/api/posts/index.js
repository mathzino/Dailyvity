import { app } from "../hello";
import { getFirestore, getDocs, collectionGroup } from "firebase/firestore";

const db = getFirestore(app);

const getAllPosts = async () => {
  const postGroup = collectionGroup(db, "posts");
  const querySnapshot = await getDocs(postGroup);
  let output = [];
  querySnapshot.forEach((post) => {
    const data = post.data();
    data.post_id = post.id;
    output.push(data);
  });
  return output;
};

export default async function handler(req, res) {
  const data = await getAllPosts();
  res.status(200).json(data);
}
