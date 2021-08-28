import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(posts);
  }, [posts]);

  return (
    <div >
        {data &&
          data.map((item, i) => {
            return <Post post={item} key={item._id} />;
          })}
      </div>
    
  );
}