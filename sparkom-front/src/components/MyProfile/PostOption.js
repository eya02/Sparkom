import "../../assets/css/PostOption.css";
const PostOption = ({ Icon, title, color }) => {
  return (
    <div className="postOption">
      <Icon style={{ color }} />
      <h4> {title}</h4>
    </div>
  );
};

export default PostOption;
