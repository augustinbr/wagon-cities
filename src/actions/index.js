// TODO: add and export your own actions
import cities from '../DB/cities';


export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectCity(selectedCity) {
  return {
    type: 'SELECT_CITY',
    payload: selectedCity
  };
}

