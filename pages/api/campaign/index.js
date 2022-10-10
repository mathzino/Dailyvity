import { app } from "../hello";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);

const getAllCampaign = async () => {
  const campaignRef = collection(db, "campaigns");
  const querySnapshot = await getDocs(campaignRef);
  let output = [];
  querySnapshot.forEach((campaign) => {
    output.push(campaign.data());
  });
  return output;
};

export default async function handler(req, res) {
  const data = await getAllCampaign();
  res.status(200).json(data);
}
