import taskReducer from './redux/taskList/taskListReducer'
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    taskReducer
})

export default rootReducer;