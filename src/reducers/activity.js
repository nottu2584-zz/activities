import {
  ADD_ACTIVITY,
  PERFORM_ACTIVITY,
  REMOVE_ACTIVITY,
  SET_ACTIVITY,
  UPDATE_ACTIVITY
} from "../actions/types";

const initialState = {};

const activityReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        checked: [...state.checked, payload],
      };

    case REMOVE_ACTIVITY:
      return {
        ...state,
        checked: state.checked.filter((item) => item.id !== payload.id),
      };

    case PERFORM_ACTIVITY:
      return {
        ...state,
        checked: state.checked.map(({ performed, ...checked }) => ({
          ...checked,
          performed: performed + 1,
        })),
      };

    case SET_ACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    case UPDATE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map(
          (activity) =>
            state.checked.find((b) => b.id === activity.id) || activity
        ),
      };

    default:
      return state;
  }
};

export default activityReducer;
