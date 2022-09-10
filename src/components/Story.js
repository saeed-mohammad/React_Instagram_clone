import React from "react";
import "../style/pages/Story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "./data/User";

const Story = () => {
  let accountName = users[Math.floor(Math.random() * users.length)].userName;
  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="Story">
      <ProfileIcon iconSize="large" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
};

export default Story;
