import React from "react";


export default function JobWidgets() {
  const job = (company, poste) => {
    return (

<li className="js-open-popup" data-popup-target=".playlist-popup">


<div className="composition">
  <a href="#" className="composition-name">{company}</a>
  <a href="#" className="composition-author">{poste} </a>
</div>



</li>

    );
  };




  return (

<div className="ui-block">
				<div className="ui-block-title">
					<a href="#" className="text-dark"><h6 className="title">Job Offers</h6></a>
				</div>

				<ul className="widget w-playlist">
				{job("Vermeg", "Web Designer")}
        {job("Google", "Software Engineer")}
        {job("Samsung Tunisia", "Marketing Manager")}
        
     


					
				</ul>
        

        


				
			</div>
  );
}






