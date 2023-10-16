import {connect} from 'react-redux';
import NewTask from './NewTask';
import {addList, deleteList, updateList, onChecked} from '../../redux/taskList/taskListAction'
import {getTaskList} from '../../redux/taskList/taskListSelector'

const mapStatetoProps=(state)=>{

  return{
    list:getTaskList(state)
  }
}

const mapDispatchToProps={
    addList,
     deleteList, 
     updateList,
     onChecked
}

export default connect(mapStatetoProps,mapDispatchToProps)(NewTask)