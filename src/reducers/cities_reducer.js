import setCities from '../actions/index';
import cities from '../DB/cities';

export default function (state = cities, action) {
  if (state === undefined) {
    return state;
  }

  if (action.type === 'SET_CITIES') {
    return action.payload;
  }
  return state;
}
