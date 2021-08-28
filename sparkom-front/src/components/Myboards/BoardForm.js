import React from "react";

import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import FormInput from "./FormInput";
import { Button, FormGroup } from "reactstrap";
const BoardForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div class="ui-block">
      <div class="ui-block-title">
        <p>
          <h6 class="title">
            <i className="fab fa-trello boards-btn-icon" /> Add a board
          </h6>
        </p>
      </div>

      <div class="ui-block-content">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group label-floating">
                <h7>
                  <i class="fas fa-align-left" /> Name
                </h7>
                <FormGroup row>
                  <Field
                    placeholder=""
                    type="text"
                    name="board_name"
                    component={FormInput}
                  />
                </FormGroup>
              </div>
            </div>
            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group label-floating">
                <h7>
                  <i class="fas fa-align-left" /> Public
                </h7>
                {/*<FormGroup row>

                <Field
     
                   type="text" name="is_public"
                  component={FormInput}
                />
                </FormGroup>*/}
              </div>
            </div>

            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group label-floating">
                <h7>
                  <i class="fas fa-unlock-alt"></i>
                </h7>
                <select name="type">
                  <option selected value="public">
                    public
                  </option>
                  <option value="private">private</option>
                </select>
              </div>

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
          </div>
        </form>
      </div>
    </div>
  );
};
BoardForm.propTypes = {
  handleSubmit: PropTypes.func,
};
export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BoardForm);
