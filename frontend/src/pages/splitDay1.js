import { useEffect, useState } from 'react'

// components
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/workoutForm'

const SplitDay1 = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className = "Home">
            <div className= "workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />   
        </div>
    )
}

export default SplitDay1