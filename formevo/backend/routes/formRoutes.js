const express = require("express");
const formRoutes = express.Router();
const Form = require("../models/Form");
const Response = require("../models/Response");
// API endpoint to save a new form
formRoutes.post("/", async (req, res) => {
  try {
    const newForm = await Form.create({
      ...req.body,
    });

    res.status(201).json(newForm._id);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to save the form."});
  }
});

// API endpoint to retrieve all forms
formRoutes.get("/all/:userId", async (req, res) => {
  try {
    const userId = req.params["userId"];

    const forms = await Form.find({ userId }).sort({ _id: -1 });

    res.json(forms);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve forms."});
  }
});

// API endpoint to retrieve all forms
formRoutes.get("/:formId", async (req, res) => {
  try {
    const formId = req.params["formId"];

    const forms = await Form.findOne({ _id: formId });
    res.json(forms);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve forms."});
  }
});

// API endpoint to retrieve all response
formRoutes.get("/responses/:formId", async (req, res) => {
  try {
    const formId = req.params["formId"];

    const response = await Response.find({ formId });
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve forms." });
  }
});

formRoutes.delete("/:formId", async (req, res) => {
  try {
    const formId = req.params["formId"];

    await Form.deleteOne({ _id: formId });
    res.status(200).json({ message: "formDeleted Succussfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve forms."});
  }
});
//API endpoint to save response
formRoutes.post("/submit", async (req, res) => {
  try {
    const response = await Response.create({
      ...req.body,
    });

    res.status(201).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to Submit the Form" });
  }
});

module.exports = formRoutes;
