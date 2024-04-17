import React from "react";
import prof from "../Images/close-up-portrait-brunette-smiling-woman-looking-confident-front-standing-hoodie-against-white-wall_11zon.webp";

function Userinfo() {
  return (
    <div className="chatuserinfo">
      <img src={prof} alt="user" />
      <h2>Jane Martha</h2>
      <p>Hi Hello this is martha😎</p>
    </div>
  );
}

export default Userinfo;
