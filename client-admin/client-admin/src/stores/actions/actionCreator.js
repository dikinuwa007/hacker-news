import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_POSTID_REQUEST,
  FETCH_POSTID_SUCCESS,
  FETCH_TAGS_SUCCESS,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./actionTypes";
// const baseUrl = "https://news.apajalah.my.id";
const baseUrl = "http://localhost:3000";

export const fetchTagsStart = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/tags");
      const responseBody = await response.json();

      dispatch(fetchTagsSuccess(responseBody));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchTagsSuccess = (payload) => {
  return { type: FETCH_TAGS_SUCCESS, payload };
};
export const fetchCategoriesRequest = () => {
  return { type: FETCH_CATEGORIES_REQUEST };
};
export const fetchCategoriesStart = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoriesRequest()); //loading
      const response = await fetch(baseUrl + "/categories");
      const data = await response.json();
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchCategoriesSuccess = (payload) => {
  return { type: FETCH_CATEGORIES_SUCCESS, payload };
};
export const fetchPostIdRequest = () => {
  //loading
  return { type: FETCH_POSTID_REQUEST };
};
export const fetchPostIdStart = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostIdRequest()); //loading
      let response = await fetch(baseUrl + "/public/posts/" + id);
      const data = await response.json();
      dispatch(fetchPostIdSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPostIdSuccess = (payload) => {
  return { type: FETCH_POSTID_SUCCESS, payload };
};

export const fetchPostsRequest = () => {
  return { type: FETCH_POST_REQUEST };
};
export const fetchPostsStart = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsRequest()); //loading
      const response = await fetch(baseUrl + "/public/posts");
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPostsSuccess = (payload) => {
  return { type: FETCH_POST_SUCCESS, payload };
};
