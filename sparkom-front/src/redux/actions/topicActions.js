import topicTypes from "../types/topicTypes";
import axios from "axios";



export const getAllTopics = (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .get(`http://localhost:3002/api/topics`, config)
      .then((res) => {
        dispatch({
          type: topicTypes.GET_ALL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addTopic = (token, userId, post) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    axios
      .post(`http://localhost:3002/api/topic/create/${userId}`, post, config)
      .then((res) => {
        dispatch({
          type: topicTypes.ADD_POST,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getTopic = (topicId) => {
  
  return axios
    .get(`http://127.0.0.1:3002/api/topic/608f822a54db520bc4f87cf8`)
    .then((res) => {
      if (res.data.error) {
        return { error: res.data.error };
      } else {
        
        return { data: res.data };
      }
    })
    .catch((err) => console.log(err));
};

