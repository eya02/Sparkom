import {React,useEffect,useState} from "react";
import avatar from "../../../assets/img/avatar2-sm.jpg";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../../redux/actions/postActions";
import { deletePost } from "../../../redux/actions/postActions";
import CommentsList from "./CommentsList";
import { format } from "timeago.js";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { activeUserSelector, thistoken } from "../../../store/slices/auth";
import { useSelector } from "react-redux";
export default function Post({ post }) {
  const [likes, setLikes] =useState([]);
  const [like, setLike] = useState(false);
  const [comments, setComments] = useState([]);
  const date = new Date(post.createdAt);

  const dispatch = useDispatch();
 // const postedBy = post.postedBy._id || post.postedBy;
  const image = post.image;
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  useEffect(() => {
    setLikes(post && post.likes);
    setComments(post && post.comments);
    checklike(post && post.likes);
  }, [post.likes, post.comments]);

  function checklike(likes) {
    let match = likes.indexOf(activeUser._id) !== -1;
    setLike(match);
  }

  return (
    <div className="ui-block">
      <article className="hentry post">
        <div className="post__author author vcard inline-items">
         {/*} <img src={`http://localhost:3002/user/photo/${postedBy}?${new Date().getTime()}`} alt="author" />*/}
              <img src={avatar} alt="author"/>
          <div className="author-date">
            <a className="h6 post__author-name fn" href="02-ProfilePage.html">
            {activeUser.name}
            </a>
            <div className="post__date">
              <time className="published" datetime="2017-03-24T18:18">
              {format(post.createdAt)}
              </time>
            </div>
          </div>

          <div className="more">
            <svg className="olymp-three-dots-icon">
          
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#" onClick={() => dispatch(deletePost(token, post._id))} >Delete</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
        </div>

        <p>
        {post.text}
        </p>


        


        {image  &&
          <div class="post-thumb">
						<img src={`http://127.0.0.1:3002/post/photo/${post._id}`} alt="photo" />
					</div>
        }

        <div className="post-additional-info inline-items">



       


        {like ? (
            <>
          <a href="#" className="post-add-icon inline-items">
            <svg onClick={() =>
                  dispatch(unlikePost(token, activeUser._id, post._id))
                }
                >
              <FavoriteIcon/>
            </svg>
            <span>{" "}
                  {likes.length}{" "}
                  </span>
          </a>
          
          <div className="names-people-likes">
            <a href="#">You</a> and
            <br />{likes.length - 1}{" "} more liked this
          </div>
          </>
          ) : (
            <>
             <a href="#" className="post-add-icon inline-items">
            <svg onClick={() =>
                  dispatch(likePost(token, activeUser._id, post._id))
                }
                >
              <FavoriteBorderIcon/>
            </svg>
            <span>{" "}
                  {likes.length}{" "}
                  </span>
          </a>
          <div className="names-people-likes">
          {likes.length}{" "} liked this
          </div>
            </>
          )}



          
          

          <div className="comments-shared">
            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-speech-balloon-icon">
                
              </svg>
              <span>{comments.length}{" "}</span>
            </a>

            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-share-icon">
              
              </svg>
              <span></span>
            </a>
          </div>
        </div>
      </article>

      <CommentsList postId={post._id} comments={comments && comments} />

      

    </div>
  );
}