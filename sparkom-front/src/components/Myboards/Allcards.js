import React from "react";
import icons from "../../assets/svg-icons/sprites/icons.svg";
import { useServerApi } from "../../hooks/useServerApi";
import { useHistory } from "react-router-dom";
export default function Allcards(props) {
  const history = useHistory();
  const list_id = props.idl;
  const [dm] = useServerApi("cards/board/" + list_id);
  console.log("----", dm);
  const back = () => {
    history.replace("/ShowBoard/" + dm.board_id);
    console.log(history);
  };

  return (
    <div class="container">
      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="ui-block responsive-flex">
          <div class="ui-block-title">
            <div>
              <button
                onClick={() => back()}
                data-toggle="modal"
                data-target="#create-photo-album"
                class="btn btn-primary btn-md-2"
              >
                <i className="fab fa-trello boards-btn-icon" /> Back to Lists
              </button>
            </div>
            <div class="h6 title"> </div>

            <a href="#top" class="more">
              <svg class="olymp-three-dots-icon">
                <use xlinkHref={`${icons}#olymp-three-dots-icon`}></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
