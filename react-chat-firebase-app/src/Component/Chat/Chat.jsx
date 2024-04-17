import React from "react";
import "../Css/chat.css";
import ProfileChat from "./ProfileChat";
import Chatinput from "./Chatinput";
import Chatmessage from "./Chatmessage";

function Chat() {
  return (
    <div className="chat">
      <ProfileChat />
      <Chatmessage />
      <Chatinput />
    </div>
  );
}

export default Chat;
