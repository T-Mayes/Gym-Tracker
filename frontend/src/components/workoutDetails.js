import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <div className="workout-details">
      <div className="edit-details">
        <h4>{workout.exercise}</h4>
        <button>Edit</button>
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
        {/* <p>
        <strong> splitDay: </strong>
        {workout.splitDay}
      </p> */}
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        <button onClick={handleClick}> Delete </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
