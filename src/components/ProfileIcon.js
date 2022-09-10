import React from "react";
import "../style/pages/ProfileIcon.scss";

const ProfileIcon = (props) => {
  const { image, iconSize, storyBorder } = props;

  function getRandomInt(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
  }
  let randomId = getRandomInt(1, 70);
  // console.log(randomId);
  let profile = image ? image : `https://i.pravatar.cc/50?image=${randomId}`;
  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img src={profile} className={`profileIcon ${iconSize}`} alt="profile" />
    </div>
  );
};

export default ProfileIcon;
