import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/store";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      userActions.login({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>login here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={nameChangeHandler}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailChangeHandler}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordChangeHandler}
        ></input>
        <button type="submit" className="sub">
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
