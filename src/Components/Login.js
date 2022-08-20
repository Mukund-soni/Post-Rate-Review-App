import React, { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "./Account";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged In!", data);
      })
      .catch((err) => {
        console.log("Failed to login!", err);
      });

    // const user = new CognitoUser({
    //   Username: email,
    //   Pool: UserPool,
    // });
    // const authDetails = new AuthenticationDetails({
    //   Username: email,
    //   Password: password,
    // });
    // user.authenticateUser(authDetails, {
    //   onSuccess: (data) => {
    //     console.log("onSuccess: ", data);
    //   },
    //   onFailure: (err) => {
    //     console.error("onFailure: ", err);
    //   },
    //   newPasswordRequired: (data) => {
    //     console.log("newPasswordRequired: ", data);
    //   },
    // });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
