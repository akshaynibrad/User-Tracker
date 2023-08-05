import Style from "./ErrorModel.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={Style.backdrop} onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Card className={Style.modal}>
          <header className={Style.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={Style.content}>
            <p>{props.message}</p>
          </div>
          <footer className={Style.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModel;
