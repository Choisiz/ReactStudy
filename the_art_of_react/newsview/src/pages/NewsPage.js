import React from "react";
import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

const NewsPage = ({ match }) => {
  console.log("ss", match);
  const category = match.params.category || "all";
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
