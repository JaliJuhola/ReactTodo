import {combineReducers} from 'redux';
const reducerPeople = require('./reducerPeople').default;

var allReducers = combineReducers({
   people: reducerPeople
});
export default allReducers;