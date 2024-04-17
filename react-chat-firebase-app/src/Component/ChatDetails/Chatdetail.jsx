import React from "react";
import "../Css/chatdetails.css";
import Userinfo from "./Userinfo";
import ChatOptions from "./ChatOptions";
import ChatuserBtn from "./ChatuserBtn";

function Chatdetail() {
  return (
    <div className="chatdetails">
      <Userinfo />
      <ChatOptions />
      <ChatuserBtn />
    </div>
  );
}

export default Chatdetail;
