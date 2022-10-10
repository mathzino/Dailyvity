import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../hello";

const db = getFirestore(app);
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
  const { uid } = req.query;
  const data = await getCampaignByUserId(uid);
  res.status(200).json(data);
}
