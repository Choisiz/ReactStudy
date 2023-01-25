import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="about">소개</Link>
        </li>
        <li>
          <Link to="profile/cafe">카페</Link>
        </li>
        <li>
          <Link to="profile/menu">메뉴</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:type" component={Profile} />
    </div>
  );
};

export default App;
