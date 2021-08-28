import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import Button from "@material-ui/core/Button";
//import TextareaAutosize from 'react-textarea-autosize';
class ActionButton extends React.Component {
  state = {
    FormOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      FormOpen: true,
    });
  };
  closeForm = (e) => {
    this.setState({
      FormOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttontext = list ? "Add another list" : "Add another card";
    const buttonOpacity = list ? 1 : 1;
    const buttonColor = list ? "white" : "inherit";
    const buttonBackgground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonOpacity,
          color: buttonColor,
          backgroundColor: buttonBackgground,
        }}
      >
        <p>+ {buttontext}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const buttonTittle = list ? "Add List " : "Add Card";

    return (
      <div>
        {/*<Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth:272,
                padding: "6px 8px 2px"
            }}>*/}
        {/*<TextareaAutosize placeholder={placeholder} 
             autoFocus onBlur={this.closeForm}
             value={this.state.text}
             onChange={this.handleInputChange}
             style={{
                 resize: "none",
                 width: "100%",
                 overflow: "hidden",
                 outline:"none",
                 border: "none"
             }}
             />*/}

        {/*</Card>*/}
        <div style={styles.formButtonGroup}>
          <Button variant="contained" color="primary" href="#contained-buttons">
            {buttonTittle}{" "}
          </Button>
          <CloseIcon style={{ marginLeft: 8, cursor: "pointer" }}></CloseIcon>
        </div>
      </div>
    );
  };
  render() {
    return this.state.FormOpen ? this.renderForm() : this.renderAddButton();
  }
}
const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    padding: 10,
  },
  formButtonGroup: {
    marginTop: "flex",
    alignItems: "center",
  },
};
export default ActionButton;
