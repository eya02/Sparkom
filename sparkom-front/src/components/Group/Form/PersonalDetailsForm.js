import React from "react";
import PropTypes from "prop-types";

import { Field, reduxForm } from 'redux-form/immutable' ;
import validate from "../../../validation/validation";
import FormInput from "../FormInput";
//import { isLogged } from "../../../helpers/auth";

import { Button, Card, CardBody, Col, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { regionOptions } from "../data";

//const jwt = isLogged();


const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

const RenderSelectInput = ({ input, reg, name, id }) => (
  <Select
    {...input}
    onBlur={() => input.onBlur()}
    defaultValue={[regionOptions[2], regionOptions[3]]}
    isMulti
    name="Topic"
    options={regionOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
const PersonalDetailsForm = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (

  
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
         
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="Username"
                  type="text"
                  component={FormInput}
                  label="Username"
                  inputPlaceHolder="name"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="GroupName"
                  type="text"
                  component={FormInput}
                  label="Group Name"
                  inputPlaceHolder="Enter Group Name"
                />
              </Col>
            </FormGroup>
            <Field
              name="Description"
              type="textarea"
              component={FormInput}
              label="Description *"
              inputPlaceHolder="Enter Description"
            />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Label>Topic</Label>
                <Field name="Topic" component={RenderSelectInput} />
              </Col>

             
            </FormGroup>
           
            <FormGroup row>
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label>Status</Label>
                  </Col>
                  <Col xs="6" lg="12">
                    <FormGroup check className="radio">
                      <div>
                        <label>
                          <Field
                            name="Type"
                            component="input"
                            type="radio"
                            value= "Public"
                          />{" "}
                          Public
                        </label>
                        <label>
                          <Field
                            name="Type"
                            component="input"
                            type="radio"
                            value="Private"
                          />
                          Private
                        </label>
                      </div>
                    </FormGroup>

                    <FormGroup check className="radio"></FormGroup>
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label htmlFor="file-input">Upload Visitor Image</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Field name="img" component={FileInput} type="file" />
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
          <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "20px" }}
              disabled={pristine || submitting}
            >
              Save &nbsp;
              <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

PersonalDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PersonalDetailsForm);
