import { SET_MESSAGE } from '../actionType';
const initState = {
  message: ''
}
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload.message }
    default:
      return state
  }
}

export default userReducer;