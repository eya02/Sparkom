// import React from "react";
// import avatar from "../../assets/img/author-main1.jpg";
// import { makeStyles } from "@material-ui/core/styles";

// import Button from "@material-ui/core/Button";
// import PermMediaIcon from "@material-ui/icons/PermMedia";
// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   input: {
//     display: "none",
//   },
// }));

// const style = {
//   border: 0,
//   color: "#5e5e5e",
// };
// const style1 = {
//   border: 0,
//   color: "#fff",
//   background: "#236aed",
// };

// function PostForm() {
//   const classes = useStyles();

//   return (
//     <div>
//       <div className="ui-block">
//         <div className="news-feed-form">
//           <div className="tab-content">
//             <form>
//               <div className="author-thumb">
//                 <img
//                   src={avatar}
//                   style={{ width: 36, height: 36 }}
//                   alt="author"
//                 />
//               </div>
//               <div className="form-group with-icon label-floating is-empty">
//                 <textarea
//                   className="form-control"
//                   placeholder="What's on your mind ?"
//                 ></textarea>
//               </div>
//             </form>
//             <div className="d-inline-flex bd-highlight">
//               <div className="d-flex justify-content-start">
//                 <div className={classes.root}>
//                   <input
//                     accept="image/*"
//                     className={classes.input}
//                     id="icon-button-file"
//                     type="file"
//                   />
//                   <label htmlFor="icon-button-file">
//                     <Button
//                       variant="outlined"
//                       style={style}
//                       size="small"
//                       className={classes.button}
//                       startIcon={<PermMediaIcon />}
//                     >
//                       Photo
//                     </Button>
//                   </label>
//                 </div>
//                 <div className={classes.root}>
//                   <input
//                     accept="image/*"
//                     className={classes.input}
//                     id="icon-button-file"
//                     type="file"
//                   />
//                   <label htmlFor="icon-button-file">
//                     <Button
//                       variant="outlined"
//                       style={style}
//                       size="small"
//                       className={classes.button}
//                       startIcon={<VideoLibraryIcon />}
//                     >
//                       Video
//                     </Button>
//                   </label>
//                 </div>
//               </div>

//               <div className="d-flex justify-content-end">
//                 <div className={classes.root}>
//                   <input
//                     accept="image/*"
//                     className={classes.input}
//                     id="icon-button-file"
//                     type="file"
//                   />
//                   <label htmlFor="icon-button-file">
//                     <Button
//                       variant="contained"
//                       style={style1}
//                       size="small"
//                       className={classes.button}
//                     >
//                       Post
//                     </Button>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostForm;

import React from "react";
import Button from "@material-ui/core/Button";
// import PermMediaIcon from "@material-ui/icons/PermMedia";
// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { makeStyles } from "@material-ui/core/styles";
import PermMedia from "@material-ui/icons/PermMedia";

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
export default function PostForm() {
  const classes = useStyles();
  const postData = new FormData();

  const [post, setPost] = React.useState({
    text: "",
    image: "",
  });

  // const dispatch = useDispatch();

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
                placeholder="What's on your mind"
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
