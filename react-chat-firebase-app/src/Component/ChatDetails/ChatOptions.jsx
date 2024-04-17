import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";

function ChatOptions() {
  return (
    <div className="chat-option">
      <div className="chat-opt-li">
        <div className="opt-title">
          <span>Chat Setting</span>
          <MdKeyboardArrowUp className="up-icon" />
        </div>
      </div>
      <div className="chat-opt-li">
        <div className="opt-title">
          <span>Privacy Setting</span>
          <MdKeyboardArrowUp className="up-icon" />
        </div>
      </div>
      <div className="chat-opt-li">
        <div className="opt-title">
          <span>Chat Setting</span>
          <MdKeyboardArrowUp className="up-icon" />
        </div>
      </div>
      <div className="chat-opt-li">
        <div className="opt-title">
          <span>Shared Photos</span>
          <MdKeyboardArrowDown className="up-icon" />
        </div>
        <div className="photos">
          <div className="photo-items">
            <div className="photo-details">
              <img
                src="https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="pc"
              />
              <span>photo.2024</span>
            </div>
            <LiaDownloadSolid className="dwnl-icon" />
          </div>

          <div className="photo-items">
            <div className="photo-details">
              <img
                src="https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="pc"
              />
              <span>photo.2024</span>
            </div>
            <LiaDownloadSolid className="dwnl-icon" />
          </div>
        </div>
      </div>
      <div className="chat-opt-li">
        <div className="opt-title">
          <span>Shared Files</span>
          <MdKeyboardArrowUp className="up-icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatOptions;
