import axios from "axios";

const getRequestSuccess = (data) => {
  return {
    type: "requestSuccess",
    payload: data,
  };
};
const getRequestFailure = (error) => {
  return {
    type: "requestFailed",
    payload: error,
  };
};
export const colors = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://reqres.in/api/unknown");
      dispatch(getRequestSuccess(res.data.data));
    } catch (error) {
      dispatch(getRequestFailure(error));
    }
  };
};
