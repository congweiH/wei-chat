import CamImg from "../assets/img/cam.png";
import AddImg from "../assets/img/add.png";
import MoreImg from "../assets/img/more.png";
import Messages from "../components/Messages";
import Input from "../components/Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={CamImg} alt="" />
          <img src={AddImg} alt="" />
          <img src={MoreImg} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
