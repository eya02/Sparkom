import { useState } from "react";
import IOSSwitch from "./IOSSwitch";

const SetOptions = ({ title, description }) => {
  const [state, setState] = useState({ checkedB: true });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="description-toggle">
      <div className="description-toggle-content">
        <div className="h6">{title}</div>
        <p>{description}</p>
      </div>

      <div className="togglebutton">
        <label>
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        </label>
      </div>
    </div>
  );
};

export default SetOptions;
