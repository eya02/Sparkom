import UserAvatar from "./UserAvatar";
const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <div className="userav">
          <UserAvatar />
        </div>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
