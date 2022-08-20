import dbConnect from "../../lib/dbConnectDB";
import PollModel from "../../models/Poll";

const handler = async (req, res) => {
  const data = req.body;

  if (req.method === "POST") {
    await dbConnect();

    await PollModel.create(JSON.parse(data));

    res.json({ message: `ok adding data ` });
  } else {
    res.json({ message: `i did nothing ` });
  }
};

export default handler;
