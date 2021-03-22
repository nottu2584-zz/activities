
import { default as React } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    background: "#009b72",
    boxShadow: "0 1px 2px #333",
    border: "none",
    borderRadius: "5px",
    color: "#ffffff",
    cursor: "pointer",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.1em",
    lineHeight: "1.1em",
    outline: "none",
    padding: "1em 1.25em",
    MozTransition: "box-shadow 0.25s",
    OTransition: "box-shadow 0.25s",
    WebkitTransition: "box-shadow 0.25s",
    transition: "box-shadow 0.25s",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "&:hover": { boxShadow: "0 1px 20px #333" },
});

const Button = (props) => {
  const classes = useStyles();
  
  const {handleOnClick} = props;

  return (
    <button className={classes.button} onClick={(e) => handleOnClick(e)}>
      {props.children}
    </button>
  );
};

export default Button;