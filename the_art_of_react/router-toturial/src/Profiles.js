import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>커피목록</h3>
      <ul>
        <li>
          <Link to="/profiles/cafe">카페</Link>
        </li>
        <li>
          <Link to="/profiles/menu">메뉴</Link>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>선택하세요</div>} />
      <Route path="/profiles/:type" component={Profile} />
    </div>
  );
};

export default Profiles;
