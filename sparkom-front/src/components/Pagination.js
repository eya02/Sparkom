import React from "react";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#top" tabIndex={-1}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#top">
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
          <a className="page-link" href="#top">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#top">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#top">
            ...
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#top">
            12
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#top">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
