import React, { Component } from "react";
import PropTypes from "prop-types";
import Stepper from "react-stepper-horizontal";
import { Card } from "reactstrap";
import UpdateDetails from "./UpdateDetails";

//import { isLogged } from "../../../helpers/auth";



class UpdateForm extends Component {
  
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
        {page === 0 &&  <UpdateDetails onSubmit={onSubmit}/>}
      
      </Card>
    );
  }
}

UpdateForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default UpdateForm;
