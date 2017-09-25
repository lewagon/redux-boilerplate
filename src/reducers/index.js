import { combineReducers } from 'redux';

// TODO: import your own reducers. Example:
// import userReducer from './user_reducer'

const rootReducer = combineReducers({
  state: (state = {}, action) => state
  // TODO: update the Redux state with your own keys + reducers. Example:
  //   user: userReducer
});

export default rootReducer;
