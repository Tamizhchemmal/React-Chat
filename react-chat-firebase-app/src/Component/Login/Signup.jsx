import React, { useState } from "react";
import dummy from "../Images/avatar.png";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";
function Signup() {
  const [loading, setLoading] = useState(false);
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

  //using Form Data method

  async function handleReg(e) {
    e.preventDefault();
    setLoading(true);
    // toast.success("sign in successful");

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    // console.log(username, email, password);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(uplodimg.file);

      const imgUrl = await upload(uplodimg.file, email);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "user chat", res.user.uid), {
        chats: [],
      });
      toast.success("User created.!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="login-input">
      <h2>Welcome! Signup here</h2>
      <form onSubmit={handleReg}>
        <div className="upload">
          <label htmlFor="file">
            <img src={uplodimg.url || dummy}></img>
            Upload Profile
          </label>
        </div>

        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleUpload}
        />
        <input type="text" placeholder="Enter Username" name="username" />
        <input type="email" placeholder="Enter email" name="email" />
        <input type="password" placeholder="Enter password" name="password" />

        <button disabled={loading}>{loading ? "Loading" : "Signup"}</button>
      </form>
    </div>
  );
}

export default Signup;
