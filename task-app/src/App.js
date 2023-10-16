import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NewTask from "./component/NewTask/ConnectedNewTask";
import TaskList from "./component/TaskList/ConnectedTaskList";
import TaskDetails from "./component/TaskDetails";

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navContainer">
            <Box className='MenuBox'>
              <Stack spacing={{ xs: 1, sm: 4 }} direction="row" >
                <Item><Link to="/App" >Home</Link></Item>
                <Item> <Link to="/NewTask">New Task</Link></Item>
                <Item> <Link to="/TaskList">Task List</Link></Item>
                <Item>  <Link to="/TaskDetails">Task Details</Link></Item>
              </Stack>
            </Box>
          </nav>
          <Routes>
            <Route path='/NewTask' element={<NewTask />}>
            </Route>
            <Route path="/TaskList" element={<TaskList />}>
            </Route>
            <Route path="/TaskDetails" element={<TaskDetails />}>
            </Route>
            <Route path="/App">
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
