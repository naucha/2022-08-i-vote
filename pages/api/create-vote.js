import dbConnect from "../../lib/dbConnectDB";
import PollModel from "../../models/Poll";

const handler = async (req, res) => {
  const data = req.body;
  debugger;
  if (req.method === "POST") {
    await dbConnect();

    debugger;
    const dataMod = await PollModel.create(JSON.parse(data));
    console.log(dataMod);
    res.json({ message: `ok adding data ` });
  } else {
    res.json({ message: `i did nothing ` });
  }
};

export default handler;
