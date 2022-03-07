import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onErrsClick}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>{props.message}</div>
          <footer className={classes.actions}>
            <Button onBtnClick={props.onErrsClick}>OK</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModel;
