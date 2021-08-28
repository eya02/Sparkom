import React from "react";

import Form from "./AddEvent";

import HeaderG from "../Group/HeaderG";
import { useServerApi } from "../../hooks/useServerApi";

import { useParams } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
export default function DirectionForm(props) {
  let { id } = useParams();
  const [dm] = useServerApi("group/getdev/" + id);
  const toRender = dm;
  return (
    <div className="app">
      {/* Header */}

      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div>
      <div class="container">
        <div class="row">
          {toRender ? (
            <>
              <HeaderG dm={toRender} />
            </>
          ) : (
            <p>Group not found</p>
          )}

          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <section className="sign_in_area bg_color sec_pad">
                <div className="container">
                  <div className="row">
                    <Form
                      onSubmit={async (values) => {
                        console.log(values);
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
