// import { createContext, useReducer } from 'react'

// export const WorkoutContext = createContext()

// export const workoutReducer = (state,  action) => {
//     switch (action.type) {
//         case 'Set_Workouts':
//             return {
//                 workouts: action.payload
//             }
        
//         case 'Create_Workout':
//             return {
//                 workouts: [action.payload, ...state.workouts]
//             }
//         default:
//             return state
//     }
// }

// export const WorkoutsContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(workoutReducer, {
//         workouts: null
//     })

//     dispatch({type: 'Set_Workouts', payload: [{},{}]})

//     return (
//         <WorkoutContext.Provider value={{...state, dispatch}}>
//             { children }
//         </WorkoutContext.Provider>
//     )
// }