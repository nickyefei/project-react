import initState from './initState'
import { combineReducers } from 'redux'
import { reducer as formReducer } from '../action/form'

// const reducers = [
//   formReducer
// ]

// export default function rootReducer(state=initState, action) {
//   let newState
//   switch(action.type) {
//     default:
//       newState = state
//       break;
//   }

//   return reducers.reduce((state, reduc) => reduc(state, action), newState)
// }


export default combineReducers({
  formReducer
})

