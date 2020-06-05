import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from './dialogs-reducer';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
//@ts-ignore
window.__store__ = store;

export default store;
