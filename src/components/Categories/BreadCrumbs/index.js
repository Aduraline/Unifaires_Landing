import NextImage from "common/components/NextImage";
import React from "react";
import styled from "styled-components";
// icon
import BreadIcon from "../../../public/images/bread.svg";

const BreadCrumbStyles = styled.div`
  padding-bottom: 40px;
  .category-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: white;
    height: 112px;

    filter: drop-shadow(0px 4px 8px rgba(182, 182, 182, 0.15));
    .main-category {
      p {
        font-weight: bold;
        font-size: 24px;
        color: #5832da;
        cursor: pointer;
      }
    }
    .category {
      p {
        font-size: 16px;
        color: #000000;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
export default function BreadCrums() {
  return (
    <BreadCrumbStyles className="container">
      <div className="category-nav">
        <div className="main-category">
          <p>Design</p>
        </div>
        <NextImage src={BreadIcon} alt="image" />
        <div className="category">
          <p>Web Design</p>
        </div>
        <div className="category">
          <p>Graphic Design & Illustration</p>
        </div>
        <div className="category">
          <p>Design Tools</p>
        </div>
        <div className="category">
          <p>User Experience Design</p>
        </div>
        <div className="category">
          <p>Game Design</p>
        </div>
        <div className="category">
          <p>3D & Animation</p>
        </div>
        <div className="category">
          <p>Fashion Design</p>
        </div>
      </div>
    </BreadCrumbStyles>
  );
}
