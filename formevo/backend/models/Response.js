const mongoose = require("../config/db");

const responseSchema = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  candidateId: { type: String, required: true },
  responses: [{}],
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
