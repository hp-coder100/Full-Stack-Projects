require("dotenv").config();
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const userRoutes = express.Router();
// API endpoint for user registration
const transporter = nodemailer.createTransport({
  // Configure your email transport here
  host: process.env.SMTP_EMAIL,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendVerificationEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Verify Your Email",
    text: `Click the following link to verify your email: http://localhost:3000/verify/${token} `,
  };

  await transporter.sendMail(mailOptions).catch((error) => {
    console.log(error);
  });
};

const sendResetPasswordEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Reset Your Password",
    text: `Click the following link to reset your password : http://localhost:3000/updatepassword/${token} `,
  };

  await transporter.sendMail(mailOptions).catch((error) => {
    console.log(error);
  });
};

userRoutes.post("/resetpassword", async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (user) {
      user.verificationToken = await bcrypt.hash(
        `${user.email}formevo${user.fullname}verification${user.password}`,
        10
      );
      user.verificationToken = user.verificationToken.replace(/\//g, "_");
      user.save();
      await sendResetPasswordEmail(user.email, user.verificationToken)
        .then(() => {
          res
            .status(200)
            .json({ message: "Reset Link has been sent to your account." });
        })
        .catch((error) => {
          console.log(error);
          res.json({ message: "Error : Can't send the reset email." });
        });
    } else {
      res.status(400).json({ message: "User Not Found with this email." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error." });
  }
});

userRoutes.post("/register", async (req, res) => {
  try {
    const { email, fullname, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    let verificationToken = await bcrypt.hash(
      `${email}formevo${fullname}verification${password}`,
      10
    );
    verificationToken = verificationToken.replace(/\//g, "_");
    // Create a new user
    const newUser = await User.create({
      email,
      fullname,
      password: hashedPassword,
      verificationToken,
    });

    sendVerificationEmail(email, verificationToken)
      .then(() => {
        res.status(201).json({
          message:
            "User Registered Successfully. An Verification email has been sent to you. Please verify your email.",
          userId: newUser._id,
          userName: fullname,
          verificationToken,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while sending the verification email.",
        });
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Error : Failed to register user." });
  }
});

//Api endpoint to verfiy user email
userRoutes.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params["token"];
    if (!token) {
      res.status(400).json({ message: "Invalid verification token." });
    }
    const user = await User.findOne({ verificationToken: token });
    if (user) {
      user.verified = true;
      user.verificationToken = "validated";
      user.save();
      res
        .status(200)
        .json({ message: "Email verified successfully. You can Log in now" });
    } else {
      res.status(400).json({ message: "Invalid verification token." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
});

//Api endpoint for updating password

userRoutes.post("/updatepassword/:token", async (req, res) => {
  try {
    const verificationToken = req.params["token"];
    const pass = req.body.password;

    const user = await User.findOne({ verificationToken });
    if (user) {
      user.password = await bcrypt.hash(pass, 10);
      user.verificationToken = "validated";
      user.save();
      res.status(200).json({ message: "Password Updated Successfully" });
    } else {
      res
        .status(400)
        .json({ message: "Token is invalid. Please try reseting again." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
});

// API endpoint for user login
userRoutes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!user.verified) {
      return res.status(403).json({
        message: "Email is not verified. Please verify your email first.",
      });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    res.json({
      user: user._id,
      userName: user.fullname,
      message: "Login successful.",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Error : Failed to login." });
  }
});

module.exports = userRoutes;
