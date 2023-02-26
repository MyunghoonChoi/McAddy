import './NaviBar.css';
import { useNavigate } from 'react-router-dom';
import todoIcon from '../../assets/TodoIcon.png';

function TodoButton()  {
    const navigate = useNavigate();
    return (
        <button className='NaviButton'
         onClick={()=>{
            navigate("/TodoPage")
         }}
        >
        <img src={todoIcon} />
        </button>
    );
}

export default TodoButton;