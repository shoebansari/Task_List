import sortUp from '../../Images/sort_up.png'
import sortDown from '../../Images/sort_down.png'
import _ from 'lodash';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TaskList = ({ taskList, onSortDown, onSortUp }) => {
    return (
        <>
            <h1>Task List</h1>
            <TableContainer className='tableContiner' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">
                                <div className="sortingArrow">
                                    ID
                                    <div className="upDown">
                                        <div><img src={sortUp} alt='Up' onClick={() => onSortUp()} width={15} /></div>
                                        <div><img src={sortDown} alt='Down' onClick={() => onSortDown()} width={15} /></div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Due Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!_.isEmpty(taskList) && taskList.map(({id,title,desc,dueDate,isChecked}) => (
                            <TableRow key={id}>
                                <TableCell align="right">{id}</TableCell>
                                <TableCell align="right">{title}</TableCell>
                                <TableCell align="right">{desc}</TableCell>
                                <TableCell align="right">{dueDate}</TableCell>
                                <TableCell align="right" style={{ color: isChecked ? 'green' : 'red' }}>{isChecked ? 'Completed' : 'Not Completed'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TaskList;