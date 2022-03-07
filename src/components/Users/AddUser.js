import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setAge] = useState("");
  const [errs, setErrs] = useState(); //undefined
  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getAge = (e) => {
    setAge(e.target.value);
  };

  const addUserHandle = (e) => {
    e.preventDefault();

    //check validation
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setErrs({
        title: "Error",
        message: "Invalid Feilds",
      });
      return;
    }
    if (userAge < 1) {
      setErrs({
        title: "Error",
        message: "Age should be > 1",
      });
      return;
    }

    // console.log(username, userAge);
    props.onAddUser(username, userAge);
    setAge("");
    setUsername("");
  };

  const errsHandle = () => {
    setErrs(null);
  };
  return (
    <>
      {errs && (
        <ErrorModel
          title={errs.title}
          message={errs.message}
          onErrsClick={errsHandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={getUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={userAge} onChange={getAge} />
          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
