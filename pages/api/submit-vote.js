import dbConnect from "../../lib/dbConnectDB";
import PollModel from "../../models/Poll";

const handler = async (req, res) => {
  const data = req.body;

  const [idPollToUpdate, idOptionSelected] = data.split(",");

  if (req.method === "PUT") {
    await dbConnect();

    const pollToUpdate = await PollModel.findById(idPollToUpdate);

    const filterOption = pollToUpdate.options.filter(
      (option) => option._id.toString() === idOptionSelected.toString()
    );

    const optionIndex = filterOption[0].__index;

    let votesToUpdate = pollToUpdate.options[optionIndex].votes;
    votesToUpdate = [...votesToUpdate, 1];

    const updatedPoll = {
      ...pollToUpdate.toObject(),

      options: pollToUpdate.options.map((option) =>
        option._id.toString() === idOptionSelected
          ? { ...option.toObject(), votes: [...votesToUpdate] }
          : option
      ),
    };

    await PollModel.findByIdAndUpdate(idPollToUpdate, updatedPoll);

    res.json({ updatedPoll });
  } else {
    res.json({ message: `i did nothing ` });
  }
};

export default handler;
