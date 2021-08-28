import { React, useEffect, useState } from "react";

import HeaderG from "../Group/HeaderG";

import LeftSidebar from "../Group/LeftSidebar";
import RightSidebar from "../Group/RightSidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useServerApi } from "../../hooks/useServerApi";
import { useParams } from "react-router-dom";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import lock from "../../assets/img/lock.png";
import axios from "axios";
import Home from "../Group/PostGR/Home";
import FeedBack from "./FeedBack";
export default function MyProfile() {
  const { id } = useParams();
  const [dm] = useServerApi("group/getdev/" + id);
  const toRender = dm;

  const activeUser = useSelector(activeUserSelector);
  const [, setmembers] = useState([]);
  const [member, setmember] = useState(false);
  const [delivs, setdelivs] = useState(false);

  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  useEffect(() => {
    function checkmember(members) {
      let match = members.indexOf(activeUser._id) !== -1;
      setmember(match);
    }
    const getdelivs = async () => {
      try {
        const userPosts = await axios.get(
          "http://localhost:3002/group/getdev/" + id
        );
        setdelivs(userPosts.data); // set State
        setmembers(userPosts.data && userPosts.data.Members);
        checkmember(userPosts.data && userPosts.data.Members);
      } catch (err) {
        console.error(err.message);
      }
    };
    getdelivs();
  }, [activeUser, id]);

  console.log(delivs.Members);

  //const CreatedBy = props.CreatedBy._id || props.CreatedBy;

  return (
    <div class="container">
      <FeedBack />
      <div class="row">
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div>
        {toRender ? (
          <>
            <HeaderG dm={toRender} />

            {toRender.IsPrivate === "Private" &&
            toRender.CreatedBy !== activeUser._id &&
            !member ? (
              <div className="col col-xl-12 col-lg-12 col-lg-12 col-sm-12 col-12">
                <div className="ui-block">
                  <div className="container">
                    <div className="control-block-button">
                      <div className="btn btn-control">
                        <img src={lock} alt="lock" />{" "}
                      </div>
                    </div>
                    <div className="ui-block-title">
                      <div className="h6 title">This Group is Private</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {" "}
                <LeftSidebar dm={toRender} />
                <Home />
                <RightSidebar dms={toRender} />
              </>
            )}
          </>
        ) : (
          <>
            <p>Product not found</p>
          </>
        )}
      </div>
    </div>
  );
}
