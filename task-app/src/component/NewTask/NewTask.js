import React, { useState } from 'react'
import _ from 'lodash'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));

const NewTask = ({ list, addList, deleteList, updateList, onChecked }) => {


    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [selectedId, setSelectedId] = useState(0);


    const editData = (item) => {
        const { id, title, dueDate, desc } = item;
        setTitle(title)
        setDesc(desc)
        setDueDate(dueDate)
        setIsUpdate(true);
        setSelectedId(id)
    }
    const onSubmit = () => {
        if (isUpdate) {
            updateList({ title, desc, dueDate, selectedId })
        }
        else {
            addList({ id: _.isEmpty(list) ? 1 : list.length + 1, title, desc, dueDate })
        }
        resetData()
    }

    const resetData = () => {
        setTitle("")
        setDesc("")
        setDueDate("")
        setIsUpdate(false)
    }

    return (
        <>
            <h2> Add Your List </h2>
            <Box className='MenuBox'>
                <Stack spacing={{ xs: 1, sm: 4 }} direction="row">
                    <Item>
                        <h3>Title</h3>
                        <TextField
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            label="Add Title"
                        />
                    </Item>
                    <Item>
                        <h3>Description</h3>
                        <TextField
                            type="text"
                            label="Add Desc"
                            value={desc}
                            onChange={(event) => setDesc(event.target.value)}
                        />
                    </Item>
                    <Item>
                        <h3>Due Date</h3>
                        <TextField
                            type="text"
                            label="Due Date"
                            value={dueDate}
                            onChange={(event) => setDueDate(event.target.value)}
                        />
                    </Item>
                </Stack>
            </Box>
            <div className='addContainer'>
                <Button variant="contained" onClick={onSubmit}>{isUpdate ? 'Update Task' : 'Add Task'}</Button>
            </div>

            <TableContainer className='tableContiner' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Due Date</TableCell>
                            <TableCell align="right">EDIT</TableCell>
                            <TableCell align="right">Delete</TableCell>
                            <TableCell align="right">Task</TableCell>
                        </TableRow>
                    </TableHead>
                    {!_.isEmpty(list) && list.map((row) => (
                        <TableBody>
                            <TableRow key={row.id}>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.desc}</TableCell>
                                <TableCell align="right">{row.dueDate}</TableCell>
                                <TableCell align="right"><EditIcon onClick={() => editData(row)}></EditIcon></TableCell>
                                <TableCell align="right"><DeleteIcon onClick={() => deleteList(row.id)}></DeleteIcon></TableCell>
                                <TableCell align="right"><input type='checkbox' checked={row.isChecked} onChange={() => onChecked(row.id)}></input></TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>
            </TableContainer>

        </>
    );
}

export default NewTask;