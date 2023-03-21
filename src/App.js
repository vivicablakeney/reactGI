import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  //useState returns two elements .. a value and a function
  const [usersList, setUsersList] = useState([]);

  const addUserandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      // spread operators that pulls all elements out of that array
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
