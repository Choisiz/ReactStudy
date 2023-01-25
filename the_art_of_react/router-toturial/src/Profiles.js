import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>커피목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/cafe" active>
            카페
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/menu" active>
            메뉴
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>선택하세요</div>} />
      <Route path="/profiles/:type" component={Profile} />
    </div>
  );
};

export default Profiles;
