import { createSelector } from 'reselect';

const getTask = (state) => state.taskReducer

const getTaskList = createSelector([getTask], (task) => task.list);
  
  export {
    getTaskList
  }