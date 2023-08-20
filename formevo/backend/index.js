require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");
const userRoutes = require("./routes/userRoutes");
const SupportMessage = require("./models/SupportMessage");
const app = express();
app.use(express.json());
const allowedOrigin = process.env.ORIGIN;
console.log(allowedOrigin);
const corsOptions = {
  origin: allowedOrigin, // Replace with your frontend's origin
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  const requestOrigin = req.get("origin");

  if (requestOrigin === allowedOrigin) {
    // Allow the request to proceed to the router
    next();
  } else {
    // Throw an error for other origins
    res
      .status(403)
      .json({ error: "Forbidden: Access from this origin is not allowed." });
  }
});
app.use("/api/form", formRoutes);
app.use("/api/user", userRoutes);

app.post("/api/support", async (req, res) => {
  try {
    const data = req.body;
    const supportMsg = await SupportMessage.create(data);
    res.status(200).json({ message: "Message Sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Error" });
  }
});

app.all("*", async (req, res) => {
  res.status(404).json({ message: "Bad Request" });
});
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
