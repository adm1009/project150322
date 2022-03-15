
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  // const onchange = (e:string) =>{
  //     setData({username:e.target.value, password})
  // }
  const submitForm = (e: any) => {
    e.preventDefault();
    //  const { username, password }= data;
    if (username === "adm1009" && password === "adm@1009") {
      setLoggedIn(true);
    } else {
      alert("enter valid details");
    }
  };
  // const [componentRoutes, setComponentRoutes] = useState(null);
  // const getSelectedValue = (val:any) => {
  //   if (val === "personal") {
  //     setComponentRoutes(<PersonalInformation/>);
  //   } else if (val === "bank") {
  //     setComponentRoutes(<BankDetails/>);
  //   }
  //   else if (val === "emergency") {
  //     setComponentRoutes(<EmergencyContact/>);
  //   }
  //   else if (val === "infogen") {
  //     setComponentRoutes(<Infogen/>);
  //   }
  // };
  // if (loggedin) {
  //   return navigate("/checkin");
  // } else {
  return (
    <div style={{ textAlign: "center" }}>
      {!loggedin && (
        <h3
          style={{
            color: "white",
            backgroundColor: "cornflowerblue",
            fontSize: "20px",
          }}
        >
          Welcome to Infogen Labs
        </h3>
      )}
      {!loggedin && (
        <>
          <h1 style={{ color: "purple", textDecoration: "underline" }}>
            Login
          </h1>
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        </>
      )}
      {loggedin && navigate("/home")}

      {/* {loggedin && <DropdownPersonal options={[
          { label: "Personal Information", value: "personal" },
          { label: "Bank Details", value: "bank" },
          { label: "Emergency Contact Details", value: "emergency" },
          { label: "Infogen Details", value: "infogen" },
        ]}
        onChange={getSelectedValue}
      />} */}
      {/* // {componentRoutes && componentRoutes}} */}
    </div>
  );
};

export default Login;
