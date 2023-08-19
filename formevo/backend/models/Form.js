const mongoose = require("../config/db");

const formSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  candidateId: {
    type: String,
    required: true,
  },
  formElements: [
    {
      type: { type: String },
      question: { type: String },
      options: [{ type: String }],
    },
  ],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
