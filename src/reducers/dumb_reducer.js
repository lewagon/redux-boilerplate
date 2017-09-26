export default function(state = null, action) {
  switch (action.type) {
    case 'UPDATE_DUMB':
      return action.payload; // New value for dumb state
    default:
      return state;
  }
}
