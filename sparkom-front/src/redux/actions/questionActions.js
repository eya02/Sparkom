import questionTypes from "../types/questionTypes";
import axios from "axios";

export const getUserQuestions = (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/api/questions/by/${userId}`, config)
      .then((res) => {
        dispatch({
          type: questionTypes.USER_QUESTIONS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getTopicQuestions = (token, topicId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/api/questions/byTopic/${topicId}`, config)
      .then((res) => {
        dispatch({
          type: questionTypes.GET_ALL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};



export const getAllQuestions = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/api/questions`, config)
      .then((res) => {
        dispatch({
          type: questionTypes.GET_ALL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addQuestion = (token, userId, question) => {

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  question.title="ttt";
  return (dispatch) => {
    axios
      .post(`http://localhost:3002/api/question/create/${userId}`, question, config)
      .then((res) => {
        dispatch({
          type: questionTypes.ADD_QUESTION,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const likeQuestion = (token, userId, questionId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3002/api/question/like`, { userId, questionId }, config)
      .then((res) => {
        dispatch({
          type: questionTypes.LIKE_UNLIKE_QUESTION,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikeQuestion = (token, userId, questionId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:3002/api/question/unlike`, { userId, questionId }, config)
      .then((res) => {
        dispatch({
          type: questionTypes.LIKE_UNLIKE_QUESTION,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (token, userId, questionId, text) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(
        `http://localhost:3002/api/question/comment`,
        { userId, questionId, text },
        config
      )
      .then((res) => {
        dispatch({
          type: questionTypes.ADD_DELETE_COMMENT,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (token, userId, questionId, comment) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .put(
        `http://localhost:3002/api/question/uncomment`,
        { userId, questionId, comment },
        config
      )
      .then((res) => {
        dispatch({
          type: questionTypes.ADD_DELETE_COMMENT,
          payload: res.data,
          userId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteQuestion = (token, questionId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .delete(`http://localhost:3002/api/question/${questionId}`, config)
      .then((res) => {
        dispatch({
          type: questionTypes.REMOVE_QUESTION,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};