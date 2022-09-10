import React from "react";
import "../style/pages/Cards.scss";
import Card from "./Card";
import Stories from "./Stories";

const Cards = () => {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="Cards">
      <Stories />
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/1000"
        comments={commentsThree}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
    </div>
  );
};

export default Cards;
