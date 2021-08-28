import React from "react";
import profilePic from "../../../assets/img/author-main1.jpg";
import icons from "../../../assets/svg-icons/sprites/icons.svg";
import AddIcon from '@material-ui/icons/Add';

export default function TopTopics() {
  const topTopic = (name, nbrFollowers) => {
    return (

<li className="js-open-popup" data-popup-target=".playlist-popup">

<div className="composition">
  <a href="topicpage" className="composition-name">{name}</a>
</div>

<div className="composition-time">
<span className="notification-icon">
          <a href="#" className="accept-request">
            <AddIcon />
          </a>
        </span>
</div>

</li>

    );
  };




  return (

<div className="ui-block">
				<div className="ui-block-title">
					<a href="alltopics" className="text-dark"><h6 className="title">Top Topics</h6></a>
				</div>

				<ol className="widget w-playlist">
				{topTopic("Politics", "13")}
        {topTopic("COVID-19", "2.768")}
				{topTopic("Python", "10.810")}


					
				</ol>
        

        


				
			</div>
  );
}






