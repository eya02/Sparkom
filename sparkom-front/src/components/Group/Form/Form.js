import React, { Component } from "react";
import PropTypes from "prop-types";
import Stepper from "react-stepper-horizontal";
import { Card } from "reactstrap";
//import { isLogged } from "../../../helpers/auth";
import PersonalDetailsForm from "./PersonalDetailsForm";


class Form extends Component {
  
  constructor(props) {
    super(props);
   
    this.state = {
      page: 0,
      steps: [
      
        { title: "Group Details" },
      
      ],
    };
  }

  

  render() {
    //const jwt = isLogged();
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 &&  <PersonalDetailsForm   onSubmit={onSubmit}/>}
      
      </Card>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
