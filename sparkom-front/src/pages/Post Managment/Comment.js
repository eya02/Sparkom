import React from "react";
import { deleteComment } from "../../redux/actions/postActions";
import { isLogged } from "../../helpers/auth";
import { useDispatch } from "react-redux";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { format } from "timeago.js";

export default function Comment({ comment, postId }) {
  const date = new Date(comment.created);
  const jwt = isLogged();
  const dispatch = useDispatch();
  const postedBy = comment.postedBy._id || comment.postedBy;

  return (
    <div className="comments-list">
    <div className="comment-item">
            <div className="post__author author vcard inline-items">
                <img  src={`http://localhost:3002/api/user/photo/${postedBy
            }?${new Date().getTime()}`} alt="author" />
    <div className="more">
            <svg className="olymp-three-dots-icon">
            <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#" onClick={() =>
                dispatch(
                  deleteComment(jwt.token, jwt.user._id, postId, comment)
                )
              } >Delete</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#"> {comment.postedBy.name || jwt.user.name}</a>
                    <div className="post__date">
                        <time className="published" datetime="2017-03-24T18:18">
                        
                        {format(date)}
                        </time>
                    </div>
                </div>
    
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkhref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
    
            </div>
    
        <p>{comment.text}</p>
    
            
        </div>
        </div>
  );
}