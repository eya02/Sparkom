import React from "react";
import { useDispatch } from "react-redux";
import { isLogged } from "../../helpers/auth";
import { addComment } from "../../redux/actions/postActions";
import Comment from "./Comment";
import icons from "../../assets/svg-icons/sprites/icons.svg";

export default function CommentsList({ postId, comments }) {
  const jwt = isLogged();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");


  function handleFormSubmit(event) {
    dispatch(addComment(jwt.token, jwt.user._id, postId, text));
              setText("");
  }  

  return (
    <div>
      {comments.map((item, index) => (
        <Comment comment={item} key={index} postId={postId} />
      ))}
      <form className="comment-form inline-items" onSubmit={handleFormSubmit}>
      <div className="post__author author vcard inline-items">
        <img src={`http://localhost:3002/api/user/photo/${jwt.user._id
            }?${new Date().getTime()}`} alt="author" />
        <div className="form-group with-icon-right">
          <textarea className="form-control" 
          
          placeholder="Commenter..."
            value={text}
            required
            onChange={(event) => setText(event.target.value)}

          />
          <div className="add-options-message">
            <a
              href="#"
              className="options-message"
              data-toggle="modal"
              data-target="#update-header-photo"
            >
              <svg className="olymp-camera-icon">
                <use xlinkHref={`${icons}#olymp-camera-icon`} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <button style={{ width: "150px" }} className="btn btn-md-2 btn-primary" type="submit" >
        Post Comment
      </button>
    </form>
      
    </div>
  );
}