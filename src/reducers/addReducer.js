const initialState = {};

export const addReducer = (state = initialState, action) => {
  console.log("@@@", state, action);
  switch (action.type) {
    default:
      return state;
  }
};
