import { useState, Fragment } from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (userData) => {
    userData["id"] = Math.random().toString();
    setUserList((prevState) => {
      return [userData, ...prevState];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      {userList.length === 0 && <p style={{ color: "red" }}>No Data Found</p>}
      {userList.length > 0 && <UsersList usersData={userList} />}
    </Fragment>
  );
}

export default App;
