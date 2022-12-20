import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="form-group m-1 ">
        <label> Email </label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>

      <div className="form-group m-1 ">
        <label>Password </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>

      <button className="btn m-1 mt-3 btn-primary w-100">Login</button>
    </form>
  );
};

export default Login;
