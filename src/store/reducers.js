import { AppActions } from "./actions.js";

const reducer = (previousState = {}, action) => {
  switch (action.type) {
    case AppActions.TOGGLE_SIDEBAR:
      return {
        ...previousState,
        isSideBarOpen: action.isSideBarOpen,
      };
    default:
      return previousState;
  }
};

export default reducer;
