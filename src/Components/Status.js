import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

export const Status = () => {
  const [status, setStatus] = useState(false);
  const { getSession, logout } = useContext(AccountContext);
  useEffect(() => {
    getSession().then((session) => {
      console.log("session: ", session.idToken.payload.email);
      setStatus(true);
    });
  }, []);
  return (
    <div>
      {status ? <button onClick={logout}>Logout</button> : "Please Log in"}
    </div>
  );
};
