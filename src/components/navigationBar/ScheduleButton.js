import './NaviBar.css';
import { useNavigate } from 'react-router-dom';
import scheduleIcon from '../../assets/ScheduleIcon.png';

function ScheduleButton()  {
    const navigate = useNavigate();
    return (
        <button className='NaviButton'
         onClick={()=>{
            navigate("/Schedule")
         }}
        >
        <img src={scheduleIcon} />
        </button>
    );
}

export default ScheduleButton;