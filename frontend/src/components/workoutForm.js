import React, { useState, useEffect } from "react";

const WorkoutForm = ({ workout, onCancel }) => {
  const [exercise, setExercise] = useState("");
  const [load, setLoad] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [splitDay, setSplitDay] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (workout) {
      setExercise(workout.exercise);
      setLoad(workout.load);
      setSets(workout.sets);
      setReps(workout.reps);
      setSplitDay(workout.splitDay);
    }
  }, [workout]);

  const handleCancel = () => {
    onCancel();
  };

  const SubmitEx = async (e) => {
    e.preventDefault();

    const updatedWorkout = { exercise, load, sets, reps, splitDay };

    const method = workout ? "PATCH" : "POST";
    const url = workout ? `/api/workouts/${workout._id}` : "/api/workouts";

    const response = await fetch(url, {
      method,
      body: JSON.stringify(updatedWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setExercise("");
      setLoad("");
      setSets("");
      setReps("");
      //setSplitDay("");
      setError(null);
      console.log("updated", json);
      window.location.reload();
    }
  };

  return (
    <form className="create" onSubmit={SubmitEx}>
      <h3>{workout ? "Edit Exercise" : "Add a new exercise"}</h3>

      <div>
        <label>Exercise Name:</label>
        <input
          type="text"
          onChange={(e) => setExercise(e.target.value)}
          value={exercise}
        />
      </div>

      <div>
        <label>Load (in kg):</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </div>

      <div>
        <label>Sets:</label>
        <input
          type="number"
          onChange={(e) => setSets(e.target.value)}
          value={sets}
        />
      </div>

      <div>
        <label>Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </div>

      {/* {workout && (
        <div>
          <label>Split Day:</label>
          <input
            type="text"
            onChange={(e) => setSplitDay(e.target.value)}
            value={splitDay}
          />
        </div>
      )} */}

      <button>{workout ? "Update" : "Add Exercise"}</button>
      {workout && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
