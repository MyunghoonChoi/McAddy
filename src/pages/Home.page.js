import React from 'react';
import "./Home.page.css";
import { useNavigate } from 'react-router-dom';
import NaviBar from '../components/navigationBar/NaviBar';

function Home() {
    const navigate = useNavigate();

 return (
   <div id='container'>
        <NaviBar/>  
    <h1>Homepage</h1>
   </div>
 )
}
export default Home;