import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];
const CategoriesBox = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  $.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover: {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBox>
      {categories.map((cate) => (
        <Category
          key={cate.name}
          activeclassname="active"
          to={cate.name === "all" ? "/" : `/${cate.name}`}
        >
          {cate.text}
        </Category>
      ))}
    </CategoriesBox>
  );
};

export default Categories;
