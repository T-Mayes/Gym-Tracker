const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <div className="delete-details">
        <h4>{workout.exercise}</h4>
        <button> Delete </button>
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
      <p>
        <strong> splitDay: </strong>
        {workout.splitDay}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
