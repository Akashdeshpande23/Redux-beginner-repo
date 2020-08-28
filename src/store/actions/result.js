import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result,
  };
};

export const store_result = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const remove_result = (resultElid) => {
  return {
    type: actionTypes.REMOVE_RESULT,
    resultElid: resultElid,
  };
};
