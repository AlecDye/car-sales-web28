export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const addItem = () => {
  return { type: ADD };
};

export const removeItem = () => {
  return { type: REMOVE };
};
