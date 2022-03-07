import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrsClick} />;
};
const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button onBtnClick={props.onErrsClick}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onErrsClick={props.onErrsClick} />,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onErrsClick={props.onErrsClick}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModel;
