import React from "react";

function Header() {
  return (
    <div>
      <div className="main-header">
        <div className="content-bg-wrap bg-group"></div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Welcome to the Forums!</h1>
                <p>
                  Here in the forums you’ll be able to easily create and manage
                  categories and topics to share with the community! We included
                  some of the most used topics, like music, comics, movies, and
                  community, each one with a cool and customizable illustration
                  so you can have fun with them!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
