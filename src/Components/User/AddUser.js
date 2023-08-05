import Style from "./AddUser.module.css";
import { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const initialData = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [userData, setUserData] = useState(initialData);
  const [errorData, setErrorData] = useState(null);

  const onChangeHandler = (input, value) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userData["username"].trim().length === 0) {
      setErrorData({
        title: "Invalid Username",
        message: "Please enter valid username",
      });
    } else if (+userData["age"].trim() <= 0) {
      setErrorData({
        title: "Invalid Age",
        message: "Please enter valid age > 0",
      });
    } else {
      props.onAddUser(userData);
      setUserData(initialData);
    }
  };

  const errorHandler = () => {
    setErrorData(null);
  };

  return (
    <Fragment>
      {errorData && (
        <ErrorModel
          title={errorData.title}
          message={errorData.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={Style.input}>
        <form onSubmit={addUserHandler}>
          <label className={Style.label} htmlFor="username">
            Username
          </label>
          <input
            type="text"
            value={userData["username"]}
            onChange={(event) => {
              onChangeHandler("username", event.target.value);
            }}
          />
          <label className={Style.label} htmlFor="age">
            Age
          </label>
          <input
            type="number"
            value={userData["age"]}
            onChange={(event) => {
              onChangeHandler("age", event.target.value);
            }}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
