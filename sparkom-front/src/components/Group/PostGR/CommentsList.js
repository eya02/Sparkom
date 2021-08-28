import React from "react";
import avatar from "../../../assets/img/avatar2-sm.jpg";
import { useDispatch } from "react-redux";
import { addComment } from "../../../redux/actions/postActions";
import Comment from "./Comment";
//import icons from "../../assets/svg-icons/sprites/icons.svg";
import { activeUserSelector, thistoken } from "../../../store/slices/auth";
import { useSelector } from "react-redux";
export default function CommentsList({ postId, comments }) {

  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);

  function handleFormSubmit(event) {
    dispatch(addComment(token, activeUser._id, postId, text));
              setText("");
  }  

  return (
    <div>
      {comments.map((item, index) => (
        <Comment comment={item} key={index} postId={postId} />
      ))}
      <form className="comment-form inline-items" onSubmit={handleFormSubmit}>
      <div className="post__author author vcard inline-items">
        <img src={avatar} alt="author" />
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