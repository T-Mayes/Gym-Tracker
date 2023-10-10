import React, { useState, useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import WorkoutForm from "../components/workoutForm";

const WorkoutDetails = ({ workout }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      window.location.reload();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="workout-details">
      <div className="edit-details">
        <h4>{workout.exercise}</h4>
        {isEditing ? (
          <div>
            <WorkoutForm workout={workout} onCancel={handleCancelEdit} />
          </div>
        ) : (
          <button onClick={handleEdit}> Edit </button>
        )}
      </div>
      <p>
        <strong> Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong> Sets: </strong>
        {workout.sets}
      </p>
      <p>
        <strong> Reps: </strong>
        {workout.reps}
      </p>
      <div className="delete-details">
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        <button onClick={handleDelete}> Delete </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
