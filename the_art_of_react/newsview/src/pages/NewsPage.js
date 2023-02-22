import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

const NewsPage = () => {
  const param = useParams();
  const category = param.category || "all";
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
