import MessengerButton from "./MessengerButton";
import "./NaviBar.css";
import PomoButton from "./PomoButton";
import ScheduleButton from "./ScheduleButton";
import TodoButton from "./TodoButton";

function NaviBar() {
  return (
    <div id="NaviBar">
      <div>
        <PomoButton />
        <ScheduleButton />
        <MessengerButton />

        <TodoButton />
      </div>
    </div>
  );
}

export default NaviBar;
