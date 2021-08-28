import React from "react";
import { deleteComment } from "../../../redux/actions/postActions";
import avatar from "../../../assets/img/avatar23-sm.jpg";
import { useDispatch } from "react-redux";
//import icons from "../../assets/svg-icons/sprites/icons.svg";
import { format } from "timeago.js";
import { activeUserSelector, thistoken } from "../../../store/slices/auth";
import { useSelector } from "react-redux";
export default function Comment({ comment, postId }) {
  const date = new Date(comment.created);

  const dispatch = useDispatch();
  const postedBy = comment.postedBy._id || comment.postedBy;
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);

  return (
    <div className="comments-list">
    <div className="comment-item">
            <div className="post__author author vcard inline-items">
                <img  src={avatar} alt="author" />
    <div className="more">
            <svg className="olymp-three-dots-icon">
           
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#" onClick={() =>
                dispatch(
                  deleteComment(token, activeUser._id, postId, comment)
                )
              } >Delete</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#"> {comment.postedBy.name || activeUser.name}</a>
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