import { createUseStyles } from "react-jss";
import Button from "./Button";

const useStyles = createUseStyles({
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    position: "fixed",
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    zIndex: 2,
  },
  content: {
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "30%",
    textAlign: "center",
    "& p": {
      margin: "1em 0 0",
    },
    "& ul": {
      textAlign: "left",
      margin: "1em 0",
    },
  },
  fullWidth: {
    flex: "1 1 100%",
  },
  button: {
    background: "#009B72",
    boxShadow: "0 1px 2px #333",
    border: "none",
    borderRadius: 5,
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "1.25em",
    lineHeight: "1.1em",
    outline: "none",
    padding: "1em 1.25em",
    "-moz-transition": "box-shadow 0.25s",
    "-o-transition": "box-shadow 0.25s",
    "-webkit-transition": "box-shadow 0.25s",
    transition: "box-shadow 0.25s",
    "&:hover": {
      boxShadow: "0 1px 20px #333",
    },
  },
});

const Modal = (props) => {
  const classes = useStyles();

  const { activities, handleModal, message, title } = props;

  return (
    <div className={`modal ${classes.modal}`}>
      <div className={`wrapper ${classes.wrapper}`}>
        <div className={`content ${classes.content}`}>
          <h2 className={classes.fullWidth}>{title}</h2>
          <p className={classes.fullWidth}>{message}</p>
          <ul className={classes.fullWidth}>
            {activities
              ? activities.map((activity, index) => (
                  <li key={index}>{activity.name}</li>
                ))
              : null}
          </ul>
          <Button handleOnClick={handleModal}>Oh, I see!</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
