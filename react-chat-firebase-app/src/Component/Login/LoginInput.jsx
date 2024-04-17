import React from "react";
import { toast } from "react-toastify";

function LoginInput() {
  function handleLogin(e) {
    e.preventDefault();
    toast.error("success");
  }
  return (
    <div className="login-input">
      <h2>Welcome Back! Login here</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Enter email" />
        <input type="text" placeholder="Enter password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginInput;
