import {connect} from 'react-redux';
import TaskList from './TaskList';
import {onSortDown,onSortUp} from '../../redux/taskList/taskListAction'
import {getTaskList} from '../../redux/taskList/taskListSelector'

const mapStatetoProps=(state)=>{

  return{
    taskList:getTaskList(state)
  }
}

const mapDispatchToProps={
    onSortDown,
    onSortUp,
}

export default connect(mapStatetoProps,mapDispatchToProps)(TaskList)