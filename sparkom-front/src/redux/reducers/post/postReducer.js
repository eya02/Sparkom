import postTypes from "../../types/postTypes";

const intialState = {
  posts: [],
  userPosts: [],
};

const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case postTypes.GET_ALL:
      return {
        ...state,
        posts: action.payload,
      };
    case postTypes.USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    case postTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case postTypes.REMOVE_POST:
      const updatedPosts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
      const updatedUserPosts = state.userPosts.filter((post) => {
        if (post.postedBy._id === action.userId) {
          return post._id !== action.payload._id;
        }
      });
      return {
        ...state,
        posts: updatedPosts,
        userPosts: updatedUserPosts,
      };
    case postTypes.LIKE_UNLIKE_POST:
      const newUpdatedPosts = state.posts.filter((post) => {
        if (post._id === action.payload._id) {
          post.likes = action.payload.likes;
          return state.posts;
        }
        return state.posts;
      });
      const newUserUpdatedPosts = state.userPosts.filter((post) => {
        post.likes = action.payload.likes;
        return state.userPosts;
      });

      return {
        ...state,
        posts: newUpdatedPosts,
        userPosts: newUserUpdatedPosts,
      };
    case postTypes.ADD_DELETE_COMMENT:
      const afterCommentActionUpdatedPosts = state.posts.filter((post) => {
        if (post._id === action.payload._id) {
          post.comments = action.payload.comments;
          return state.posts;
        }
        return state.posts;
      });
      const afterCommentActionUserUpdatedPosts = state.userPosts.filter(
        (post) => {
          post.comments = action.payload.comments;
          return state.userPosts;
        }
      );
      return {
        ...state,
        posts: afterCommentActionUpdatedPosts,
        userPosts: afterCommentActionUserUpdatedPosts,
      };

    default:
      return state;
  }
};

export default postReducer;