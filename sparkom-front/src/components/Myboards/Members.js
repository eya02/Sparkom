import React from "react";
import friend from "../../assets/img/avatar67-sm.jpg";

export default function Members(props) {
  return (
    <>
      <div className="fixed-sidebar right">
        <div className="fixed-sidebar-right sidebar--small" id="sidebar-right">
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            {props.dm?.Members?.map((item, i) => (
              <div key={i}>
                <ul className="chat-users">
                  <li className="inline-items js-chat-open">
                    <div className="author-thumb">
                      <img alt="author" src={friend} className="avatar" />
                      <span className="icon-status online"></span>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
            <li className="all-users">{props.dm?.Members.length}</li>
          </div>
        </div>
      </div>
    </>
  );
}
