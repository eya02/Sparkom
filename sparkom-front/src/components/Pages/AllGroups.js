import React from "react";

import AddGrBu from "../Group/AddGrBu";
import GroupCard from "../Group/GroupCard";
import FeedBack from "./FeedBack";
import NavBar from "../../components/NavBar/NavBar";
import { useServerApi } from "../../hooks/useServerApi";
export default function AllGroups() {
  const [dms] = useServerApi("group/getdev");
  console.log(dms);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(dms);
  }, [dms]);

  return (
    <div>
      <FeedBack/>
      <div className="app">
        {/* Header */}
        <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div>
        {/* App Body */}

        <div className="container">
          <div className="row">
            <AddGrBu />
            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="container">
                <div className="row">
                  {data &&
                    data.map((item, i) => {
                      
                      return <GroupCard dms={item} key={item._id} />
                      
                      ;
                    })}

                  {/*<GroupCard dms={dms} />*/}
                </div>
              </div><div class="header-spacer header-spacer-small mb-3"></div><div class="header-spacer header-spacer-small mb-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
