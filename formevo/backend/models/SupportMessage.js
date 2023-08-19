const mongoose = require("../config/db");

const SupportMessageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: { type: String, required: true },
});

const SupportMessage = mongoose.model("SupportMessage", SupportMessageSchema);

module.exports = SupportMessage;
