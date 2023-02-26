import './NaviBar.css';
import { useNavigate } from 'react-router-dom';
import pomoicon from '../../assets/PomoIcon.png';

function PomoButton()  {
    const navigate = useNavigate();
    return (
        <button className='NaviButton'
         onClick={()=>{
            navigate("/pomodoro")
         }}
        >
        <img src={pomoicon} />
        </button>
    );
}

export default PomoButton;