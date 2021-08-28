import React from "react";

export default function MyMsg({ location }) {
  return (
    <div className="media w-50 ml-auto mb-3">
      <div className="media-body">
        <div className="bg-primary rounded py-2 px-3 mb-2">
          {!location && (
            <p className="text-small mb-0 text-white">
              Test which is a new approach to have all solutions
            </p>
          )}
          {location}
        </div>

        <p className="small text-muted">12:00 PM | Aug 13</p>
      </div>
    </div>
  );
}
