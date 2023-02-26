import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.page";
import Pomodoro from './pages/Pomodoro.page';
import Schedule from './pages/Schedule.page';
import Messenger from './pages/Messenger.page';
import TodoPage from './pages/Todo.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Pomodoro' element = {<Pomodoro/>}/>
        <Route path='/Schedule' element = {<Schedule/>}/>
        <Route path='/Messenger' element = {<Messenger/>}/>
        <Route path='/TodoPage' element = {<TodoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
