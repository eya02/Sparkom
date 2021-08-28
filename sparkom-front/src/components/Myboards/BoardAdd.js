import React from "react";

import Button from "@material-ui/core/Button";
import "./BoardAdd.css";

export default function BoardAdd(props) {
  return props.trigger ? (
    <div className="cardedit">
      <div className="cardedit-inner">
        <Button
          variant="contained"
          href="#contained-buttons"
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          <i class="far fa-times-circle"></i>
        </Button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
