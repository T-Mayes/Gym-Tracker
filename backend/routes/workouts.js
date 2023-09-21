const express = require('express')
const {
    createWorkout,
    getWorkout,
    allWorkouts,
    deleteWorkout,
    editWorkout

} = require('../controllers/workoutController')

const router = express.Router()

// to get all workouts - records
router.get('/', allWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout 
router.post('/', createWorkout)

// delete workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', editWorkout)


module.exports = router