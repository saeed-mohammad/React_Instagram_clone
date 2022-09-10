import React from "react";
import "../style/pages/CardMenu.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";

const CardMenu = () => {
  return (
    <div className="CardMenu">
      <div className="interAction">
        <AiOutlineHeart className="icon" />
        <FaRegComment className="icon" />
        <RiShareForwardLine className="icon" />
      </div>
      <BsBookmark className="icon" />
    </div>
  );
};

export default CardMenu;
