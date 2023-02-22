import React, { useCallback, useState } from "react";
import { Route } from "react-router-dom";
import Categories from "./component/Categories";
import NewsList from "./component/NewsList";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
