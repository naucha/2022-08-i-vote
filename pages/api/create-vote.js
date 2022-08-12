import dbConnect from "../../lib/dbConnectDB";
import Poll from "../../models/Poll";

const handler = async (req, res) => {
  const data = req.body;

  if (req.method === "POST") {
    await dbConnect();

    const dataMod = await Poll.create(data);

    res.json({ message: `ok adding data ` });
  } else {
    res.json({ message: `i did nothing ` });
  }
};

export default handler;
