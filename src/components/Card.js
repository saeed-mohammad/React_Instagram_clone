import React from "react";
import "../style/pages/Card.scss";
import Profile from "./Profile";
import { MdMoreHoriz } from "react-icons/md";
import CardMenu from "./CardMenu";
import Comments from "./Comments";
const Card = (props) => {
  const { storyBorder, image, comments, likeByNumber, likeByText, hours } = props;
  return (
    <div className="Card">
      <header>
        <Profile storyBorder={true} iconSize="medium" />
        <MdMoreHoriz className="cardButton" />
      </header>
      <img src={image} alt="card content" className="cardImage" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" accountHide={true} />
        <span>
          Liked by <strong>{likeByText}</strong> and{" "}
          <strong>{likeByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
};

export default Card;
