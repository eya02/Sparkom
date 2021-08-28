import React from 'react'
import { format } from "timeago.js";

const NewsItem = ({title,author,publishedAt,url,urlToImage}) => {
    return (
        <div>



<li className="js-open-popup" data-popup-target=".playlist-popup">
<div className="playlist-thumb">
  <img src={urlToImage} alt="new image" />
  
</div>

<div className="composition">
  <a href={url} target="_blank" className="composition-name">{title}</a>
  <a href="#" className="composition-author">By: {author} - {format(publishedAt)}</a>
</div>



</li>




            




    
        </div>
    )
}

export default NewsItem;