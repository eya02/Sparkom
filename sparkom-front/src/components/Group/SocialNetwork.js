import React from "react";


export default function SocialNetwork() {
  return (
    <div className="widget w-socials">
      <h6 className="title">Other Social Networks:</h6>
      <a href="." className="social-item bg-facebook">
        <i className="fab fa-facebook-f" aria-hidden="true" />
        Facebook
      </a>
      <a href="." className="social-item bg-twitter">
        <i className="fab fa-twitter" aria-hidden="true" />
        Twitter
      </a>
    </div>
  );
}

