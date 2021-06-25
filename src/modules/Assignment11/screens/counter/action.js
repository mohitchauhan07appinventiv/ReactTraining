export const incrementCount = (number) => {
  return {
    type: "Increment",
    payload: number,
  };
};

export const decrementCount = (number) => {
  return {
    type: "Decrement",
    payload: number,
  };
};
