import React from "react";
import UserWidget from "./UserWidget";
import TopTopics from "./TopTopics";

export default function LeftSidebar() {
  return (
   
    <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12 " >
      <UserWidget />
      <TopTopics />
      
    </div>
    
  );
}
