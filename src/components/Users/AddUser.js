import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setAge] = useState("");

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
      return;
    }
    if (userAge < 1) {
      return;
    }

    // console.log(username, userAge);
    props.onAddUser(username, userAge);
    setAge("");
    setUsername("");
  };
  return (
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
  );
};

export default AddUser;
