import React from "react";

const Avatar = ({ link, career }) => {
  return (
    <div className="avatar">
      <img className="photo" src={link} alt="avatar" />
      {career === "new" && <span className="new">new</span>}
    </div>
  );
};

export default Avatar;
