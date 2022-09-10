import React from "react";
import "../style/pages/Suggestion.scss";
import Profile from "./Profile";
const Suggestion = () => {
  return (
    <div className="suggestion">
      <div className="titleContainer">
        <h4 className="title">Suggestion For You</h4>
        <a href="/">See All</a>
      </div>
      <Profile
        iconSize="medium"
        caption="Followed by saeed + 3 more"
        urlText="Follow"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        iconSize="medium"
        caption="Followed by sid + 3 more"
        urlText="Follow"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        iconSize="medium"
        caption="Followed by sam + 3 more"
        urlText="Follow"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        iconSize="medium"
        caption="Followed by dan + 3 more"
        urlText="Follow"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  );
};

export default Suggestion;
