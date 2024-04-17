import React, { useState } from "react";
import dummy from "../Images/172620_upload_icon.png";
import { toast } from "react-toastify";

function Signup() {
  const [uplodimg, setUploadimg] = useState({
    file: null,
    url: "",
  });

  const handleUpload = (e) => {
    if (e.target.files[0]) {
      setUploadimg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  function handleReg(e) {
    e.preventDefault();
    toast.success("sign in successful");
  }
  return (
    <div className="login-input">
      <h2>Welcome! Signup here</h2>
      <form onSubmit={handleReg}>
        <div className="upload">
          <label htmlFor="file">
            <img src={uplodimg.url || dummy}></img>
            Upload Image
          </label>
        </div>

        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleUpload}
        />
        <input type="text" placeholder="Enter Username" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />

        <button>SignUp</button>
      </form>
    </div>
  );
}

export default Signup;
