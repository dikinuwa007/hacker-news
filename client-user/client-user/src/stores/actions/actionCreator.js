import { FETCH_POSTID_SUCCESS, FETCH_POSTS_SUCCESS } from "./actionTypes";
const baseUrl='http://localhost:3000'
export const fetchPostIdStart = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl+"/public/posts/" + id);
      // console.log(response, "<<<RES");
      const data = await response.json();
      console.log(data,'<<<<RESPONSE DB');
      dispatch(fetchPostIdSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPostIdSuccess = (payload) => {
  return { type: FETCH_POSTID_SUCCESS, payload };
};

export const fetchPostSuccess = (payload) => {
  return { type: FETCH_POSTS_SUCCESS, payload };
};
export const fetchPostStart = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl+"/public/posts");
      const data = await response.json();
      dispatch(fetchPostSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
