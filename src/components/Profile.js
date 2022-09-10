import React from "react";
import "../style/pages/Profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "./data/User";
const Profile = (props) => {
  const {
    username,
    urlText,
    caption,
    iconSize,
    image,
    captionSize,
    storyBorder,
    hideAccountName,
  } = props;
  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].userName;

  return (
    <div className="profile">
      <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image} />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
};

export default Profile;
