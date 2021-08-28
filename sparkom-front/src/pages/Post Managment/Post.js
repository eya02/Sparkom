import React from "react";
import { isLogged } from "../../helpers/auth";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../redux/actions/postActions";
import { deletePost } from "../../redux/actions/postActions";
import CommentsList from "./CommentsList";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { format } from "timeago.js";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
export default function Post({ post }) {
  const [likes, setLikes] = React.useState([]);
  const [like, setLike] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  const jwt = isLogged();
  const dispatch = useDispatch();
  const postedBy = post.postedBy._id || post.postedBy;
  const image = post.image;

  React.useEffect(() => {
    setLikes(post && post.likes);
    setComments(post && post.comments);
    checklike(post && post.likes);
  }, [post.likes, post.comments]);

  function checklike(likes) {
    let match = likes.indexOf(jwt.user._id) !== -1;
    setLike(match);
  }

  return (
    <div className="ui-block">
      <article className="hentry post">
        <div className="post__author author vcard inline-items">
          <img
            src={`http://localhost:3002/api/user/photo/${postedBy}?${new Date().getTime()}`}
            alt="author"
          />
          <div className="author-date">
            <a
              className="h6 post__author-name fn"
              href={"http://localhost:3006/room"}
            >
              {post.postedBy.name || jwt.user.name}
            </a>
            <div className="post__date">
              <time className="published" datetime="2017-03-24T18:18">
                {format(post.createdAt)}
              </time>
            </div>
          </div>

          <div className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref={`${icons}#olymp-three-dots-icon`} />
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => dispatch(deletePost(jwt.token, post._id))}
                >
                  Delete
                </a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
        </div>

        <p>{post.text}</p>

        {image && (
          <div class="post-thumb">
            <img
              src={`http://127.0.0.1:3002/api/post/photo/${post._id}`}
              alt="photo"
            />
          </div>
        )}

        <div className="post-additional-info inline-items">
          {like ? (
            <>
              <a href="#" className="post-add-icon inline-items">
                <svg
                  onClick={() =>
                    dispatch(unlikePost(jwt.token, jwt.user._id, post._id))
                  }
                >
                  <FavoriteIcon />
                </svg>
                <span> {likes.length} </span>
              </a>

              <div className="names-people-likes">
                <a href="#">You</a> and
                <br />
                {likes.length - 1} more liked this
              </div>
            </>
          ) : (
            <>
              <a href="#" className="post-add-icon inline-items">
                <svg
                  onClick={() =>
                    dispatch(likePost(jwt.token, jwt.user._id, post._id))
                  }
                >
                  <FavoriteBorderIcon />
                </svg>
                <span> {likes.length} </span>
              </a>
              <div className="names-people-likes">
                {likes.length} liked this
              </div>
            </>
          )}

          <div className="comments-shared">
            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-speech-balloon-icon">
                <use xlinkHref={`${icons}#olymp-speech-balloon-icon`} />
              </svg>
              <span>{comments.length} </span>
            </a>

            <a href="#" className="post-add-icon inline-items">
              <svg className="olymp-share-icon">
                <use xlinkHref={`${icons}#olymp-share-icon`} />
              </svg>
              <span>24(soon)</span>
            </a>
          </div>
        </div>
      </article>

      <CommentsList postId={post._id} comments={comments && comments} />
    </div>
  );
}
