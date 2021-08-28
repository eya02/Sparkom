import React from "react";

export default function SenderMsg() {
  return (
    <div className="media w-50 mb-3">
      <img
        src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
        alt="user"
        className="rounded-circle"
        width={50}
      />
      <div className="media-body ml-3">
        <div className="bg-light rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-muted">
            Test which is a new approach all solutions
          </p>
        </div>
        <p className="small text-muted">12:00 PM | Aug 13</p>
      </div>
    </div>
  );
}
