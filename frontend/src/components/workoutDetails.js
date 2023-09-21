const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details"> 
            <h4>{workout.exercise}</h4>
            <p><strong> Load (kg): </strong>{workout.load}</p>
            <p><strong> Sets: </strong>{workout.sets}</p>
            <p><strong> Reps: </strong>{workout.reps}</p>  
            <p>{workout.createdAt}</p>              
        </div>
    )
}

export default WorkoutDetails