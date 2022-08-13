import mongoose from "mongoose";

const PollSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please insert a title"],
  },
  description: {
    type: String,
    require: [true, "Please insert a description"],
  },
  options: [
    { option: String, votes: [Number] },
    { option: String, votes: [Number] },
    { option: String, votes: [Number] },
  ],
});

export default mongoose.models.Poll || mongoose.model("Poll", PollSchema);
