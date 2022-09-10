import React from "react";
import "./../style/pages/Menu.scss";
import { HiHome } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import ProfileIcon from "./ProfileIcon";
import image from "../assets/profile.jpeg";
const Menu = () => {
  return (
    <div className="menu">
      <HiHome className="icon" />
      <RiMessengerLine className="icon" />
      <FiPlusSquare className="icon" />
      <ImCompass2 className="icon" />
      <AiOutlineHeart className="icon" />
      <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
};

export default Menu;
