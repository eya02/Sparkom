import React from "react";
import { useHistory } from "react-router-dom";

import Form from "./Form/Form";
import { activeUserSelector, thistoken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Add(props) {
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  let valeurs;
  const custom_file_upload_url = `http://localhost:3002/group/add/${activeUser._id}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmitFile = (values) => {
    console.log(valeurs);
    let formData = new FormData();
    // formData.append("img", valeurs.img);
    formData.append("CreatedBy", activeUser._id);
    formData.append("name", valeurs.GroupName);
    formData.append("description", valeurs.Description);
    formData.append("IsPrivate", valeurs.Type);

    var reg = JSON.stringify(valeurs.Topic);

    formData.append("Topic", reg);
    console.log(reg);

    axios
      .post(custom_file_upload_url, formData, config)
      .then((res) => {
        console.log(reg);
      })
      .catch((err) => {
        console.log(err);
      });
    history.replace("/allg");
  };
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="login_info">
              <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
                Create Group
              </h2>
              <Form
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
  );
}
