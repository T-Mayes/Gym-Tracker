require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.Port, () => {
      console.log("connected to DB & listening on port", process.env.Port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
