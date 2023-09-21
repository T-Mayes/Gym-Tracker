const Workouts = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all
const allWorkouts = async (req, res) => {
  const getAll = await Workouts.find({}).sort({ createdAt: -1 });

  res.status(200).json(getAll);
};

// get one
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no record found" });
  }

  const getOne = await Workouts.findById(id);

  if (!getOne) {
    return res.status(404).json({ error: "no record found" });
  }

  res.status(200).json(getOne);
};

// create one
const createWorkout = async (req, res) => {
  const { exercise, sets, reps, load, splitDay } = req.body;

  // add doc to db
  try {
    const createNew = await Workouts.create({
      exercise,
      sets,
      reps,
      load,
      splitDay,
    });
    res.status(200).json(createNew);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete one
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no record found" });
  }

  const workout = await Workouts.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "no record found under that ID" });
  }

  res.status(200).json(workout);
};

// edit one
const editWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no record found" });
  }

  const updateWorkout = await Workouts.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updateWorkout) {
    return res.status(404).json({ error: "no record found under that ID" });
  }

  res.status(200).json(updateWorkout);
};

module.exports = {
  createWorkout,
  getWorkout,
  allWorkouts,
  deleteWorkout,
  editWorkout,
};
