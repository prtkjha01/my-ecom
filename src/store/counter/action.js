export const counterActionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const incrementCounter = () => {
  return { type: counterActionTypes.INCREMENT };
};
export const decrementCounter = () => {
  return { type: counterActionTypes.DECREMENT };
};
