import React, { useState } from "react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

function LoginInput() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    setLoading(true);
    e.preventDefault();
    const fromData = new FormData(e.target);

    const { email, password } = Object.fromEntries(fromData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("login success");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-input">
      <h2>Welcome Back! Login here</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter email" name="email" />
        <input type="password" placeholder="Enter password" name="password" />
        <button disabled={loading}>{loading ? "Loading" : "Login"}</button>
      </form>
    </div>
  );
}

export default LoginInput;
