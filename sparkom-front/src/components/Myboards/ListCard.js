import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import CardEdit from "./CardEdit";
import CardForm from "./CardForm";

import { useServerApi } from "../../hooks/useServerApi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ListCard = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [cards] = useServerApi("cards/" + props.list_id);
  const history = useHistory();

  const Details = (idc) => {
    console.log("listcard", idc);
    history.replace("/EditCard/" + idc);
    console.log(history);
  };
  const carddetails = (id) => {
    history.replace("/CardDetails/" + id);
  };

  return (
    <div>
      {cards?.map((dm, index) => (
        <div key={index}>
          <Card style={styles.cardContainer}>
            <cardContainer
              style={{ cursor: "pointer" }}
              onClick={() => {
                carddetails(dm._id);
              }}
            >
              <Card>
                <Typography gutterBottom> {dm.Card_name} </Typography>

                {/*<img alt="author" src={avatar2} className="avatar"/>
                 <img alt="author" src={avatar5} className="avatar"/>
        <img alt="author" src={avatar6} className="avatar"/>*/}
              </Card>
            </cardContainer>
            <div style={{ paddingLeft: "250px" }}>
              <Link>
                <i
                  class="far fa-trash-alt"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    props.deletecard(dm._id);
                    window.location.reload(false);
                  }}
                >
                  {" "}
                </i>
              </Link>
              {/*<i class="far fa-edit" style={{cursor:"pointer"}}  onClick={() => setButtonPopup(true)}></i>*/}
              {/*<Link to="/EditCard">*/}
              <i
                class="far fa-edit"
                style={{ cursor: "pointer" }}
                onClick={() => Details(dm._id)}
              ></i>
              {/*</Link>*/}
            </div>
          </Card>
          <CardEdit trigger={buttonPopup} setTrigger={setButtonPopup}>
            <CardForm />
          </CardEdit>
        </div>
      ))}
    </div>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default ListCard;
