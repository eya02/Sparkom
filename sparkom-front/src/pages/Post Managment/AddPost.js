import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../../helpers/auth";
import { addPost } from "../../redux/actions/postActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PermMedia from "@material-ui/icons/PermMedia";
import { activeUserSelector } from "../../store/slices/auth";

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
};
const style1 = {
  padding: "7%",
  marginLeft: "550%",
  marginBottom: "15%",
  color: "#fff",
  background: "#236aed",
};
export default function AddPost() {
  const classes = useStyles();
  const postData = new FormData();

  const [post, setPost] = React.useState({
    text: "",
    image: "",
  });
  const activeUser = useSelector(activeUserSelector);
  const dispatch = useDispatch();

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
    post.postedBy && postData.append(activeUser._id);
    dispatch(
      addPost(
        JSON.stringify(localStorage.getItem("token")),
        activeUser._id,
        postData
      )
    );
  }

  return (
    <div className="ui-block">
      <div className="news-feed-form">
        <div className="tab-content">
          <form onSubmit={handleFormSubmit} className="card p-2">
            <div className="form-group">
              <textarea
                rows="5"
                cols="30"
                name="text"
                placeholder="What's on your mind,Amen Allah?"
                value={post.text}
                required
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
            <br />

            <div className="form-group">
              {/*<div className="form-group">

              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>*/}

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
  );
}
