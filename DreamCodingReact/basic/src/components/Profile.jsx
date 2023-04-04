import React from "react";
import Avatar from "./Avatar";
const Profile = ({ name, job, link, career }) => {
  return (
    <div className="profile">
      <Avatar link={link} career={career} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
};

export default Profile;
