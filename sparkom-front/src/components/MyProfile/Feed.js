import React from "react";
import Post from "./Post";
import postimg from "../../assets/img/post-photo6.jpg";
import Comments from "./Comments";
import PostForm from "./PostForm";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PermMedia from "@material-ui/icons/PermMedia";
import mernImage from "../../assets/img/mern.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const style = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "row",
  width: "5vw",
  padding: 3,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#3d3c3b",
  borderRadius: 5,
  color: "#3d3c3b",
  marginLeft: "20%",
  cursor: "pointer",
};
const style1 = {
  padding: "7%",
  marginLeft: "550%",
  marginBottom: "15%",
  color: "#fff",
  background: "#236aed",
};

export default function Feed() {
  const classes = useStyles();
  const postData = new FormData();
  const [pst, setPst] = React.useState(false);

  const [post, setPost] = React.useState({
    text: "",
    image: "",
  });
  function handleInputChange(event) {
    const value =
      event.target.name === "image"
        ? event.target.files[0]
        : event.target.value;
    setPost({
      ...post,
      [event.target.name]: value,
      [event.target.name]: value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    post.text && postData.append("text", post.text);
    post.image && postData.append("image", post.image);
    setPst(true);
  }
  return (
    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
        {/* <PostForm /> */}
        <div className="ui-block">
          <div className="news-feed-form">
            <div className="tab-content">
              <form onSubmit={handleFormSubmit} className="card p-2">
                <div className="form-group">
                  <textarea
                    rows="5"
                    cols="30"
                    name="text"
                    placeholder="What's on your mind"
                    value={post.text}
                    required
                    onChange={(event) => handleInputChange(event)}
                    className="form-control"
                  />
                </div>
                <br />

                <div className="form-group">
                  <span>{"   "}</span>

                  <label htmlFor={"upload-button"}>
                    <div style={style}>
                      <PermMedia
                        style={{
                          marginRight: 5,
                          marginLeft: 5,
                          fontSize: "medium",
                        }}
                      />{" "}
                      Photo
                    </div>
                    <input
                      style={{ display: "none" }}
                      id="upload-button"
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={(event) => handleInputChange(event)}
                      className="form-control"
                    />
                  </label>
                  <span>{"   "}</span>

                  <label htmlFor="icon-button-file">
                    <Button
                      variant="contained"
                      style={style1}
                      size="small"
                      className={classes.button}
                      type="submit"
                    >
                      Post
                    </Button>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        {pst && (
          <Post
            date="2 hours ago"
            img={mernImage}
            likesnbr="0"
            sharenbr="0"
            commentsnbr="0"
            content={post.text}
            comments={<Comments />}
          />
        )}
        <Post
          date="2 hours ago"
          img={postimg}
          likesnbr="40"
          sharenbr="24"
          commentsnbr="2"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris consequat."
          comments={<Comments />}
        />
        <Post
          date="2 hours ago"
          img={postimg}
          likesnbr="40"
          sharenbr="24"
          commentsnbr="2"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris consequat."
        />
      </div>
    </div>
  );
}
