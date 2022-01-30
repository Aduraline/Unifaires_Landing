import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";

const CategoryStyles = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  .dopedown__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function index() {
  return (
    <CategoryStyles className="container ">
      {/* TODO: Add the drop down section */}
      <div className="dopedown__wrapper">
        <Dropdown title="COUNTRY" />
        <Dropdown title="CITY" />
        <Dropdown title="JOB TYPE" />
        <Dropdown title=" ORGANIZATION TYPE" />
        <Dropdown title="PREFERRED LANAGUAGE" />
        <Dropdown title=" FIELD OF STUDY" />
      </div>
    </CategoryStyles>
  );
}
