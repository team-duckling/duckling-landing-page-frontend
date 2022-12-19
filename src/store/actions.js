export const AppActions = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};

export const setIsSideBarOpenAction = (isSideBarOpen) => {
  return {
    type: AppActions.TOGGLE_SIDEBAR,
    isSideBarOpen,
  };
};
