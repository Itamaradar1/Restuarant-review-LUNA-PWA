import {combineReducers, createStore} from 'redux';
import {applyMiddleware } from "redux";
import Reducer from './reducers/reducer';
import FetchInfosReducer from './reducers/fetchInfosReducer';
import thunk from "redux-thunk"

const middlewares = applyMiddleware(thunk);


const reducer = combineReducers({Reducer, FetchInfosReducer}) // import and add , additional-reducer here to combine

export const lunaStore = createStore(reducer,middlewares); 