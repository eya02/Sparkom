import React from "react";
import Pic from "../../assets/img/group-bottom.png";

export default function Bheader() {
  return (
    <div class="main-header">
      <div class="content-bg-wrap bg-group"></div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
            <div class="main-header-content">
              <h1>Manage your Boards</h1>
              <p>
                Welcome to your boards! Do you wanna know what boards can help
                you to do? Boards will let you easily manage your Plans,
                Projects . Just click on the plus button below and start now!
                Fun, Flexible and Free Way to Organize Plans, Projects and More.
                You can create your boards to help you and/or your team to work
                faster.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img class="img-bottom" src={Pic} alt="friends" />
    </div>
  );
}
