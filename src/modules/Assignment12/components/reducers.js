const initialState = {
  Data: [],
  error: "",
};
const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "requestSuccess":
      return {
        ...state, Data: action.payload,
      };
    case "requestFailed":
      return {
        ...state, error: action.payload,
      };
    default:return state;
  }
};
export default apiReducer;
