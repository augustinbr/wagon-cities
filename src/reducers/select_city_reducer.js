import selectCity from '../actions';


export default function(state = "", action) {
  if (state === undefined) {
    return ["hello"];
  }

  if (action.type === 'SELECT_CITY') {
    console.log(action.payload);
    return action.payload;
  }
  return state;
}
