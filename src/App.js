import { default as React, useEffect, useReducer, useState } from "react";
import { Activities, Button, Modal } from "./components";
import activityReducer from "./reducers/activity";
import ActivityService from "./services/activity.service";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& button": {
      marginTop: "1.5em"
    }
  },
  content: {
    padding: "5%",
    minWidth: "60%",
  },
});

const App = () => {
  const classes = useStyles();

  const initialState = {
    activities: [],
    checked: [],
  };

  const [friendly, setFriendly] = useState(true);
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    ActivityService.getActivities()
      .then((res) => {
        dispatch({ type: "SET_ACTIVITY", payload: res.data.activities });
      })
      .catch((err) => console.log("Error fetching activities", err));
  }, []);

  const handleOnChange = (e, activity) => {
    if (e.target.checked) {
      dispatch({ type: "ADD_ACTIVITY", payload: activity });
    } else {
      dispatch({ type: "REMOVE_ACTIVITY", payload: activity });
    }
  };

  const handleModal = (e) => {
    if (!friendly) setFriendly(true);
  };

  const performActivities = (e) => {
    if (!friendlyActivities()) setFriendly(false);
    else {
      dispatch({ type: "PERFORM_ACTIVITY" });
      dispatch({ type: "UPDATE_ACTIVITY" });
    }
  };

  const friendlyActivities = () => {
    if (state.checked.length > 0) {
      for (let i = 0; i < state.checked.length; i++) {
        if (!state.checked[i].friendly) return false;
      }
    }

    return true;
  };

  return (
    <div className={`app ${classes.app}`}>
      <div className={`content ${classes.content}`}>
        <header className="header">
          <h1>My 2020 Activity Tracker</h1>
        </header>
        <Activities
          activities={state.activities}
          checked={state.checked}
          handleOnChange={handleOnChange}
        ></Activities>
        {state.checked.length ? (
          <Button handleOnClick={performActivities}>Perform Activities</Button>
        ) : null}
      </div>
      {!friendly ? (
        <Modal
          activities={
            state.checked.length
              ? state.checked.filter((activity) => activity.friendly === false)
              : null
          }
          handleModal={handleModal}
          title={`We are sorry`}
          message={`The following activities cannot be done under the current
            circunstances:`}
        ></Modal>
      ) : null}
    </div>
  );
};

export default App;
