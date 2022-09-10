import React from "react";
import "../style/pages/Comments.scss";

const Comments = (props) => {
  const { accountName, comment } = props;
  return (
    <div className="Comments">
      <div className="accountName">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default Comments;
