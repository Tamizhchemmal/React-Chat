import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import prof from "../Images/close-up-portrait-brunette-smiling-woman-looking-confident-front-standing-hoodie-against-white-wall_11zon.webp";
function ProfileChat() {
  return (
    <div className="profilechat">
      <div className="user-prof">
        <img src={prof}></img>
        <div className="text">
          <span>Jane Martha</span>
          <p>Hi Hello this is martha</p>
        </div>
      </div>
      <div className="icons">
        <MdOutlinePhone />
        <LuInfo />
      </div>
    </div>
  );
}

export default ProfileChat;
