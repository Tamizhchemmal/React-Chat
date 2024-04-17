import React from "react";
import "../Css/list.css";
import UserInfo from "./UserInfo";
import ChatList from "./ChatList";

function List() {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
}

export default List;
