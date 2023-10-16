import { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TaskDetails = () => {
    const [idTitle, setIdTitle] = useState('');
    const [detailData, setDetailData] = useState({})

    const list = useSelector((state) => state.taskReducer.list)

    const onSearch = () => {
        const detailList = list.find((item) => item.id == idTitle || item.title == idTitle)
        setDetailData(detailList);
    }
    return (
        <div className='taskDetails'>
            <h1>Task Details</h1>
            <div>
                <div >
                    <TextField type='text' value={idTitle} onChange={(e) => setIdTitle(e.target.value)} label='Enter Id or Title' />
                    <Button className='taskDetailButton' variant="contained" onClick={onSearch}>Search</Button>
                </div>
                <div>
                    {!_.isEmpty(detailData) &&
                        <Table>
                            <TableRow>
                                <TableCell variant="head"><b>ID</b></TableCell>
                                <TableCell> {detailData.id}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head"><b>Title</b></TableCell>
                                <TableCell> {detailData.title}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head"><b>Description</b></TableCell>
                                <TableCell>{detailData.desc}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head"><b>Due Date</b></TableCell>
                                <TableCell>{detailData.dueDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head"><b>Task</b></TableCell>
                                <TableCell>{detailData.isChecked ? 'Completed' : 'Not Completed'}</TableCell>
                            </TableRow>
                        </Table>
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskDetails;