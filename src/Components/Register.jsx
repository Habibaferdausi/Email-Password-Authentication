import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.password);
  };

  const handleEmailChange = (event) => {
    console.log(event);
  };

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your email"
        />
        <br></br>
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
