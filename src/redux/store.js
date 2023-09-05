 import {combineReducers} from 'redux'
 import { legacy_createStore as createStore} from 'redux'
 import studentReducer from './reducers.js/studentReducer'
 import userReducer from './reducers.js/userReducer'

const rootReducer=combineReducers({user:userReducer,student:studentReducer})
const store=createStore(rootReducer,)

export default store;
