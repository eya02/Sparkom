import React from "react";
import PostG from "./PostG";
import postimg from "../../assets/img/post-photo6.jpg";
import Comments from "./Comments";
import PostForm from "./PostForm";
import MembLikes from "./MembLikes";
export default function Feed() {
  return (
    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
      
      
         
            <PostForm/>
         
     
         

        <PostG
          date="2 hours ago"
          img={postimg}
          likesnbr={<MembLikes />}
          sharenbr="24"
          commentsnbr="2"
          content=" Hi guys! We just wanted to let everyone know that we are currently recording our new album “News of the Goo”. We’ll be playing one of our new songs this Friday at 8pm in our Fake Street 320 recording studio, come and join us!"
          comments={<Comments />}
        />
        <PostG
          date="2 hours ago"
          img={postimg}
          likesnbr="40"
          sharenbr="24"
          commentsnbr="2"
          content=" Hey Syrine, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eum vitae vel ex nobis sunt distinctio nisi dolorem!"
        />
      </div>
        </div>
    
  );
}
