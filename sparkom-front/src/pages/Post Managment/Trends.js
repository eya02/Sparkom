import React from "react";


export default function Trends() {
  const trend = (name, nbrUses) => {
    return (

<li className="js-open-popup" data-popup-target=".playlist-popup">


<div className="composition">
  <a href="trendpage" className="composition-name">{name}</a>
  <a href="#" className="composition-author">{nbrUses} Followers</a>
</div>



</li>

    );
  };




  return (

<div className="ui-block">
				<div className="ui-block-title">
					<a href="trendpage" className="text-dark"><h6 className="title">Trends</h6></a>
				</div>

				<ul className="widget w-playlist">
				{trend("#Bootstrap4", "347")}
        {trend("#GoogleI/O_2021", "20")}
        {trend("#Telnet_ChalengeOne", "12.543")}
        {trend("#Microsoft", "130")}


					
				</ul>
        

        


				
			</div>
  );
}






