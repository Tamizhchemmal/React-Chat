import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import image from "../Images/worldface-spanish-guy-white-background_11zon.webp";

function UserInfo() {
  return (
    <div className="userinfo">
      <div className="avatar">
        <img src={image}></img>
      </div>
      <div>
        <h2>Tamizh Doe</h2>
      </div>
      <div className="icons">
        <BsThreeDots />
        <AiOutlineEdit />
      </div>
    </div>
  );
}

export default UserInfo;
