import { INCREMENT, RESET} from '../util/contants'

const initState = {
  count: 0
}

export const increment = (gap) => ({type: INCREMENT, gap})
export const reset = () => ({type: RESET}) 

export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.gap
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}