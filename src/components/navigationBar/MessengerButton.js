import './NaviBar.css';
import { useNavigate } from 'react-router-dom';
import messengerIcon from '../../assets/MessengerIcon.png';

function MessengerButton()  {
    const navigate = useNavigate();
    return (
        <button className='NaviButton'
         onClick={()=>{
            navigate("/Messenger")
         }}
        >
        <img src={messengerIcon} />
        </button>
    );
}

export default MessengerButton;