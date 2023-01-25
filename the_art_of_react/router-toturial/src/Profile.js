import React from "react";

const data = {
  cafe: {
    name: "starbuck",
    des: "안녕하세요 스타벅스입니다.",
  },
  menu: {
    name: "latte",
    des: "라떼입니다.",
  },
};

const Profile = ({ match }) => {
  const { type } = match.params;
  const profile = data[type];
  if (!profile) {
    return <div>존재하지 않는 메뉴입니다.</div>;
  }
  return (
    <div>
      <h3>
        {type}({profile.name})
      </h3>
      <p>{profile.des}</p>
    </div>
  );
};

export default Profile;