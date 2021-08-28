import postTypes from "../types/postTypes";
import axios from "axios";

export const getUserPosts = (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/posts/by/${userId}`, config)
      .then((res) => {
        dispatch({
          type: postTypes.USER_POSTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getTopicPosts = (token, topicId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/api/posts/byTopic/${topicId}`, config)
      .then((res) => {
        dispatch({
          type: postTypes.GET_ALL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllPosts = (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/posts/${userId}`, config)
      .then((res) => {
        dispatch({
          type: postTypes.GET_ALL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (token, userId, post) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .post(`http://localhost:3002/post/create/${userId}`, post, config)
      .then((res) => {
        dispatch({
          type: postTypes.ADD_POST,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const likePost = (token, userId, postId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3002/post/like`, { userId, postId }, config)
      .then((res) => {
        dispatch({
          type: postTypes.LIKE_UNLIKE_POST,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikePost = (token, userId, postId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3002/post/unlike`, { userId, postId }, config)
      .then((res) => {
        dispatch({
          type: postTypes.LIKE_UNLIKE_POST,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (token, userId, postId, text) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(
        `http://localhost:3002/post/comment`,
        { userId, postId, text },
        config
      )
      .then((res) => {
        dispatch({
          type: postTypes.ADD_DELETE_COMMENT,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (token, userId, postId, comment) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(
        `http://localhost:3002/post/uncomment`,
        { userId, postId, comment },
        config
      )
      .then((res) => {
        dispatch({
          type: postTypes.ADD_DELETE_COMMENT,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (token, postId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .delete(`http://localhost:3002/post/${postId}`, config)
      .then((res) => {
        dispatch({
          type: postTypes.REMOVE_POST,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
