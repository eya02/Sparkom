import React from "react";
import avatar from "../../../assets/img/author-page.jpg";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { activeUserSelector, avatarSelector } from "../../../store/slices/auth";
import { useSelector } from "react-redux";


const ITEM_HEIGHT = 8;

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
  border: 0,
  color: "#5e5e5e",
};
const style1 = {
  border: 0,
  color: "#fff",
  background: "#236aed",
};

function PostForm() {
  const userAvatar = useSelector(avatarSelector);
const activeUser = useSelector(activeUserSelector);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="ui-block">
        <div className="news-feed-form">
          <div className="tab-content">
            <div
              className="tab-pane active"
              id="home-1"
              role="tabpanel"
              aria-expanded="true"
            >
              <form>
                <div className="author-thumb">
                  <img src={userAvatar} alt="author" />
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <textarea
                    className="form-control"
                    placeholder="What's on your mind,Amen Allah?"
                  ></textarea>
                </div>
              </form>
              <div className="d-inline-flex bd-highlight">
                  <div class="d-flex justify-content-start">
                    <div className={classes.root}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <Button
                          variant="outlined"
                          style={style}
                          size="small"
                          className={classes.button}
                          startIcon={<PermMediaIcon />}
                        >
                          Photo
                        </Button>
                      </label>
                    </div>
                    <div className={classes.root}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <Button
                          variant="outlined"
                          style={style}
                          size="small"
                          className={classes.button}
                          startIcon={<VideoLibraryIcon />}
                        >
                          Video
                        </Button>
                      </label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end">
                    <div className={classes.root}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <Button
                          variant="contained"
                          style={style1}
                          size="small"
                          className={classes.button}
                        >
                          Post
                        </Button>
                      </label>
                    </div>
                  </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PostForm;
