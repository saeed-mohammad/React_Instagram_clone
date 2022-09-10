import React from "react";
import "../style/pages/SideBar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Footer from "./Footer";
import Suggestion from "./Suggestion";
import image from "../assets/profile.jpeg";

const SideBar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="Mohd_Saeed"
          caption="sk_saeed008"
          urlText="Switch"
          iconSize="large"
          image={image}
        />
        <Suggestion />
        <Footer />
      </div>
    </Sticky>
  );
};

export default SideBar;
