import mongoose from "mongoose";

const VotationSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please insert a title"],
  },
  description: {
    type: String,
    require: [true, "Please insert a description"],
  },
  option1: {
    type: String,
    require: [true, "Please insert a description"],
  },
  option2: {
    type: String,
    require: [true, "Please insert a description"],
  },
  option3: {
    type: String,
  },
});

export default mongoose.models.Votation ||
  mongoose.model("Votation", VotationSchema);
