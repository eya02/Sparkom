import React from "react";
import Header from "./Header";
import YourQuestion from "./YourQuestion";
import { isLogged } from "../../helpers/auth";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../redux/actions/questionActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
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

const style1 = {
  padding: "1%",
  marginLeft: "70%",
  marginBottom: "2%",
  color: "#fff",
  background: "#236aed",
};
function AddQuestion() {
  const classes = useStyles();
  const activeUser = useSelector(activeUserSelector);

  const jwt = isLogged();
  const dispatch = useDispatch();
  const questionData = new FormData();
  const [question, setQuestion] = React.useState({
    title: "",
    body: "",
    type: "",
  });
  function handleInputChange(event) {
    setQuestion({ ...question, [event.target.name]: event.target.value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    question.title && questionData.append("title", question.title);
    question.body && questionData.append("body", question.body);
    question.type && questionData.append("type", question.type);
    question.questionedBy && questionData.append(activeUser._id);

    dispatch(
      addQuestion(localStorage.getItem("token"), activeUser._id, questionData)
    );
    window.location.reload(false);
  }
  return (
    <div>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title bg-blue">
                <h6 className="title c-white">Ask a question</h6>
              </div>
              <div className="ui-block-content">
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <textarea
                          rows="1"
                          cols="1"
                          name="title"
                          placeholder="Title..."
                          value={question.title}
                          required
                          onChange={(event) => handleInputChange(event)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          rows="10"
                          cols="1"
                          name="body"
                          placeholder="Body..."
                          value={question.body}
                          onChange={(event) => handleInputChange(event)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          rows="1"
                          cols="1"
                          name="type"
                          placeholder="Type..."
                          value={question.type}
                          onChange={(event) => handleInputChange(event)}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <button className="btn btn-secondary">Cancel</button>
                    </div>

                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <Button
                        variant="contained"
                        style={style1}
                        size="small"
                        className={classes.button}
                        type="submit"
                      >
                        Add Question
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <YourQuestion />
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
