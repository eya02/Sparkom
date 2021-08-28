import React from "react";
import { useHistory } from "react-router-dom";

import { thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import UpdateForm from "./Form/UpdateForm";
export default function Update(props) {
  const history = useHistory();

  const token = useSelector(thistoken);
  let valeurs;

  const { id } = useParams();
  const custom_file_upload_url = `http://localhost:3002/group/updategr/${id}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmitFile = (values) => {
    console.log(valeurs);
    let formData = new FormData();
    formData.append("img", valeurs.img);
    formData.append("name", valeurs.GroupName);
    formData.append("description", valeurs.Description);
    formData.append("IsPrivate", valeurs.Type);

    axios
      .put(custom_file_upload_url, formData, config)
      .then((res) => {
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
    history.replace("/g/" + id);
  };
  return (
    <div className="app">
      {/* Header */}

      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div>
      {/* App Body */}
      <div className="app__body">
        <section className="sign_in_area bg_color sec_pad">
          <div className="container">
            <div className="sign_info">
              <div className="row">
                <div className="login_info">
                  <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
                    Create Group
                  </h2>
                  <UpdateForm
                    onSubmit={async (values) => {
                      valeurs = values;
                      handleSubmitFile(values);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
