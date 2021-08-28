import React from "react";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
            <div className="ripple-container">
              <div
                className="ripple ripple-on ripple-out"
                style={{
                  left: "-10.3833px",
                  top: "-16.8333px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transform: "scale(16.7857)",
                }}
              />
            </div>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            ...
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            12
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
