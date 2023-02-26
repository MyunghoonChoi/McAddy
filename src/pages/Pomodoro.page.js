import React from "react";
import { useNavigate } from "react-router-dom";
import NaviBar from '../components/navigationBar/NaviBar';
import "./Pomodoro.page.css";

function Pomodoro() {
    return (
        <div id='container'>
        <NaviBar/>
    <h1>Pomo</h1>
   </div>
    )
   }
   export default Pomodoro;