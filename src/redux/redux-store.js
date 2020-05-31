import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from './dialogs-reducer';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
