// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


// internal modules
import App from './components/app';
import citiesReducer from './reducers/cities_reducer';
import selectCityReducer from './reducers/select_city_reducer';
import '../assets/stylesheets/application.scss';
import { setCities, selectCity } from './actions';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: selectCityReducer
  // (state = null, action) => state
});


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
