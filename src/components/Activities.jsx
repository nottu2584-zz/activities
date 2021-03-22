import { default as React } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  activities: {
    background: "#F3F4F6",
    color: "#282c34",
    borderRadius: 5,
    fontSize: "0.9em",
    overflow: "hidden",
    padding: 0,
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "&.head": {
      borderBottom: "1px solid #DCDFE5",
      fontFamily: "'Rubik', sans-serif",
      fontSize: "1.2em",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    "&:nth-child(even)": {
      backgroundColor: "#DCDFE5",
    },
  },
  cell: {
    boxSizing: "border-box",
    flexGrow: "1",
    padding: "0.8em 1.2em",
    overflow: "hidden",
    listStyle: "none",
    "&.col-1": {
      flex: "0 0 50px",
    },
    "&.col-2": {
      flex: "0 0 calc(50% - 50px)",
      textAlign: "left",
    },
    "&.col-3": {
      flex: "0 0 25%",
    },
    "&.col-4": {
      flex: "0 0 25%",
    },
  },
});

const Activities = (props) => {
  const classes = useStyles();
  const { activities, checked, handleOnChange } = props;

  return (
    <div className={`activities ${classes.activities}`}>
      <div className={`${classes.row} row head`}>
        <div className={`${classes.cell} col col-1`}></div>
        <div className={`${classes.cell} col col-2`}>Activity Name</div>
        <div className={`${classes.cell} col col-3`}>COVID Friendly</div>
        <div className={`${classes.cell} col col-4`}>Times Performed</div>
      </div>
      {activities
        ? activities.map((activity, index) => {
            return (
              <div key={index} className={`${classes.row} row row-${index}`}>
                <div className={`${classes.cell} col col-1`}>
                  <input
                    name={`activity-${activity.id}`}
                    id={`activity-${activity.id}`}
                    type="checkbox"
                    checked={checked.some(
                      (item) => item.id === activity.id
                    )}
                    onChange={(e) => handleOnChange(e, activity)}
                  />
                </div>
                <div className={`${classes.cell} col col-2`}>
                  {activity.name}
                </div>
                <div className={`${classes.cell} col col-3`}>
                  {activity.friendly ? "Yes" : "No"}
                </div>
                <div className={`${classes.cell} col col-4`}>
                  {activity.performed}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;
