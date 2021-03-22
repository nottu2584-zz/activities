import activityReducer from "../reducers/activity";
import * as types from "../actions/types";

const mockUpActivity = {
  id: 1,
  name: "Netflix & Chill",
  friendly: true,
  performed: 50,
};

describe("activity reducer", () => {
  it("should return state if no action was specified", () => {
    const initialState = {
      activities: [],
      checked: [],
    };

    const updatedState = activityReducer(initialState, "");
    expect(updatedState).toEqual(initialState);
  });

  it("should update checked state for ADD_ACTIVITY type", () => {
    const initialState = {
      checked: [],
    };

    const dispatch = { type: types.ADD_ACTIVITY, payload: mockUpActivity };
    const updatedState = activityReducer(initialState, dispatch);
    expect(updatedState).toEqual({
      checked: [mockUpActivity],
    });
  });

  it("should update checked state for REMOVE_ACTIVITY type", () => {
    const initialState = {
      checked: [mockUpActivity],
    };

    const dispatch = { type: types.REMOVE_ACTIVITY, payload: mockUpActivity };
    const updatedState = activityReducer(initialState, dispatch);
    expect(updatedState).toEqual({
      checked: initialState.checked.filter(
        (item) => item.id !== mockUpActivity.id
      ),
    });
  });

  it("should update checked state for PERFORM_ACTIVITY type", () => {
    const initialState = {
      checked: [mockUpActivity],
    };

    const dispatch = { type: types.PERFORM_ACTIVITY };
    const updatedState = activityReducer(initialState, dispatch);
    expect(updatedState).toEqual({
      checked: initialState.checked.map(({ performed, ...checked }) => ({
        ...checked,
        performed: performed + 1,
      })),
    });
    // Updated state should be equal to initialState performed once more
    updatedState.checked.map((activity, index) => {
      expect(activity.performed).toEqual(
        initialState.checked[index].performed + 1
      );
    });
  });

  it("should update activities state for SET_ACTIVITY type", () => {
    const initialState = {
      activities: [],
    };

    const dispatch = { type: types.SET_ACTIVITY, payload: [mockUpActivity] };
    const updatedState = activityReducer(initialState, dispatch);
    // Updated state should be the union between the initialState and the payload
    expect(updatedState).toEqual({
      activities: [
        ...new Set([...initialState.activities, ...[mockUpActivity]]),
      ],
    });
  });

  it("should update activities depending on checked items for UPDATE_ACTIVITY type", () => {
    const initialState = {
      activities: [mockUpActivity],
      checked: [{ ...mockUpActivity, performed: 3 }],
    };

    const dispatch = { type: types.UPDATE_ACTIVITY };
    const updatedState = activityReducer(initialState, dispatch);
    // Updated state should be the addition of changes from checked to activities
    updatedState.activities.map((activity, index) => {
      expect(activity.performed).toEqual(initialState.checked[index].performed)
    });
  });
});
