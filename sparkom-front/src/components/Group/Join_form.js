import React, { useState } from "react";
import "./index.css";

const firstComponent = () => {
  return (
    <div>
      <div className="form-group text_box">
        <label className="">Username</label>
        <input id="5" type="text" placeholder="Name" />
      </div>

      <div className="form-group text_box">
        <label className="f_p text_c f_400">Email Address</label>
        <input type="text" placeholder="saasland@gmail.com" />
      </div>

      <div className="form-group text_box">
        <label className="f_p text_c f_400">Password</label>
        <input type="password" placeholder="******" />
      </div>
      <div className="extra mb_20"></div>
    </div>
  );
};
const secondComponent = () => {
  return (
    <div>
      <div className="form-group text_box">
        <label className="f_p text_c f_401">Full name</label>
        <input id="5" type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="wdate2">Date of Birth :</label>
        <input type="date" className="form-control" id="wdate2" />
      </div>
      <div className="form-group">
        <label>gender :</label>
        <div className="m-b-10">
          <label className="custom-control custom-radio">
            <input
              id="radio1"
              name="radio"
              type="radio"
              className="custom-control-input"
            />
            <span className="custom-control-label">Male</span>
          </label>
          <label className="custom-control custom-radio">
            <input
              id="radio1"
              name="radio"
              type="radio"
              className="custom-control-input"
            />
            <span className="custom-control-label">Female</span>
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="wLocation1">Region :</label>
        <select
          className="custom-select form-control required"
          id="wLocation1"
          name="wlocation"
        >
          <option value="">Select City</option>
          <option value="India">Tunis</option>
          <option value="USA">Sfax</option>
          <option value="Dubai">Bizerte</option>
        </select>
      </div>
    </div>
  );
};
const thirdComponent = () => {
  return (
    <div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">phone numbe</label>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <h1>Upload you Driver licence</h1>
        <input type="file" name="myImage" />
      </div>
    </div>
  );
};
const finalComponent = () => {
  return (
    <div>
      <h6>
        You shall comply with all laws, regulations, rules, policies and
        guidelines as well as this Code and any further guidelines that may be
        issued by the Company from time to time. The Company will conduct random
        checks on delivery man as well as merchants. You are required to
        co-operate courteously and comply with the reasonable requests from the
        Company. You are prohibited from taking part in any illegal
        demonstrations against the Company, being a member of an unregistered
        association, incite other delivery partners not to use the Byte
        application, boycott or threaten to boycott the Byte application or any
        other acts that may be construed to be against the interests of the
        Company.
      </h6>
      <div className="checkbox remember">
        <label>
          <input type="checkbox" /> I agree to terms and conditions of this
          website
        </label>
      </div>
    </div>
  );
};

export default function Join() {
  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "Acount detail",
      isDone: false,
      component: firstComponent,
    },
    {
      key: "secondStep",
      label: "Personal detail",
      isDone: false,
      component: secondComponent,
    },
    {
      key: "thirdStep",
      label: "Legal information",
      isDone: false,
      component: thirdComponent,
    },
    {
      key: "finalStep",
      label: "Confirmation",
      isDone: false,
      component: finalComponent,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("done");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  return (
    <div className="App">
      <div className="box">
        <div className="steps">
          <ul className="nav">
            {steps.map((step, i) => {
              return (
                <li
                  key={i}
                  className={`${activeStep.key === step.key ? "active" : ""} ${
                    step.isDone ? "done" : ""
                  }`}
                >
                  <div>
                    Step {i + 1}
                    <br />
                    <span>{step.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="step-component">{activeStep.component()}</div>
        <div className="btn-component">
          <input
            className="btn_three sign_btn_transparent"
            type="button"
            value="Back"
            onClick={handleBack}
            disabled={steps[0].key === activeStep.key}
          />
          <input
            type="button"
            className="btn_three sign_btn_transparent"
            value={
              steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit"
            }
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
