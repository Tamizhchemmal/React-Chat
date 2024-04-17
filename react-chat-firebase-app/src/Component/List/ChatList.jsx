import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import Friendlist from "./Friendlist";

function ChatList() {
  const [addbtn, setAddbtn] = useState(true);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="search-input">
          <GoSearch className="search-icon" />
          <input placeholder="Search"></input>
        </div>
        <div className="add">
          {addbtn ? (
            <IoAddOutline
              className="plus-icon"
              onClick={() => setAddbtn((prev) => !prev)}
            />
          ) : (
            <AiOutlineMinus
              className="plus-icon"
              onClick={() => setAddbtn((prev) => !prev)}
            />
          )}
        </div>
      </div>
      <Friendlist />
    </div>
  );
}

export default ChatList;
