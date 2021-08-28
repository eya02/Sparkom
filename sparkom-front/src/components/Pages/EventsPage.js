import React from "react";

import HeaderG from "../Group/HeaderG";

import NavBar from "../../components/NavBar/NavBar";
import Events from "../Events/Events";
import AddEventButt from "../Group/AddEventButt";
import { useParams } from "react-router-dom";
import { useServerApi } from "../../hooks/useServerApi";

export default function EventsPage(props) {
  const { id } = useParams();
  const [dm] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  const [events] = useServerApi("group/getevent/" + id);

  console.log(events);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(events);
  }, [events]);

  return (
    <div>
      <div className="app">
        {/* Header */}
        <NavBar />

        <div class="header-spacer header-spacer-small mb-3"></div>

        {toRender ? (
          <>
            <HeaderG dm={toRender} />
            <div className="container">
              <div className="row">
                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10">
                  <AddEventButt dm={toRender} />
                  <div className="ui-block">
                    <div className="ui-block-title ui-block-title-small">
                      <h6 className="title">UPCOMING EVENTS 2021</h6>
                    </div>

                    {data &&
                      data.map((item, i) => {
                        return (
                          <>
                            <Events
                              dm={toRender}
                              events={item}
                              key={item._id}
                            />
                            <div className="ui-block-title ui-block-title-small"></div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
}
