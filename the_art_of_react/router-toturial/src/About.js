import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log("lo", location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log("qq", query);
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>소개페이지</h1>
      <p>소개페이지입니다.</p>
      {showDetail && <p>detail은 true</p>}
    </div>
  );
};

export default About;
