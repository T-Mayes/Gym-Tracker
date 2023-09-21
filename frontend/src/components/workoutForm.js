import { useState } from "react";

const WorkoutForm = () => {
  const [exercise, setExercise] = useState("");
  const [load, setLoad] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [splitDay, setSplitDay] = useState("");
  const [error, setError] = useState(null);

  const SubmitEx = async (e) => {
    e.preventDefault();

    const workout = { exercise, load, sets, reps, splitDay };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
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
      setSplitDay("");
      setError(null);
      console.log("Exercise Added", json);
      window.location.reload();
    }
  };

  return (
    <form className="create" onSubmit={SubmitEx}>
      <h3>Add a new exercise</h3>

      <label>Exercise Name:</label>
      <input
        type="text"
        onChange={(e) => setExercise(e.target.value)}
        value={exercise}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Sets:</label>
      <input
        type="number"
        onChange={(e) => setSets(e.target.value)}
        value={sets}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <label>Split Day:</label>
      <select name="Split" id="cars">
        <option value="Chest & Biceps">Chest & Biceps</option>
        <option value="Back & Triceps">Back & Triceps</option>
        <option value="Legs">Legs</option>
        <option value="Chest & Back">Chest & Back</option>
        <option value="Arms & Shoulders">Arms & Shoulders</option>
      </select>

      <button>Add Exercise</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
