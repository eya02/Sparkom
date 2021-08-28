import React from 'react'
import avatar from "../../../assets/img/author-main1.jpg";
import { activeUserSelector, avatarSelector } from "../../../store/slices/auth";
import { useSelector } from "react-redux";
function Comment() {
    const userAvatar = useSelector(avatarSelector);
    const activeUser = useSelector(activeUserSelector);
    const cmnt = (name, cmntTime,content) => {
        return (
    
            <li className="comment-item">
            <div className="post__author author vcard inline-items">
                <img src={userAvatar} alt="author" />
    
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">{name}</a>
                    <div className="post__date">
                        <time className="published" datetime="2017-03-24T18:18">
                            {cmntTime}
                        </time>
                    </div>
                </div>
    
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkhref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
    
            </div>
    
        <p>{content}</p>
    
            
        </li>
    
        );
      };








    return (
        <div>
            <ul className="comments-list">
					
            {cmnt("Amen Allah Ben Ayada", "19 hours ago","comment 1.")}
            {cmnt("Amen Allah Ben Ayada", "19 hours ago","comment 2")}
            
				</ul>
        </div>
    )
}

export default Comment
