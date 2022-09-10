import React from "react";
import Story from "./Story";
import "../style/pages/Stories.scss";
import HorizontalScroll from "react-scroll-horizontal";

const Stories = () => {
  return (
    <div className="Stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
};

export default Stories;
