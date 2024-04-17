import React, { useState } from "react";
import { LiaImage } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsEmojiKiss } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

function Chatinput() {
  const [emojiopen, setEmojiopen] = useState(false);
  const [text, setText] = useState("");

  const handleemoji = (e) => {
    console.log(e);
    setText((prev) => prev + e.emoji);
    setEmojiopen((prev) => !prev);
  };
  console.log(text);
  return (
    <div className="cht-input">
      <div className="icon-chat">
        <LiaImage />
        <IoCameraOutline />
        <CiMicrophoneOn />
      </div>
      <input
        placeholder="Type a message.."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {emojiopen ? (
        <EmojiPicker
          className="emoji-picker"
          onEmojiClick={(e) => handleemoji(e)}
        />
      ) : (
        ""
      )}
      <div className="send-grp">
        <BsEmojiKiss onClick={() => setEmojiopen((prev) => !prev)} />
        <button type="button">Send</button>
      </div>
    </div>
  );
}

export default Chatinput;
