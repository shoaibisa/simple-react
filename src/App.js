import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [usersList, setUserList] = useState([]);

  const onAddUserHandle = (uName, uAge) => {
    setUserList((prevList) => {
      return [...prevList, { name: uName, age: uAge, key: Math.random() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={onAddUserHandle} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
