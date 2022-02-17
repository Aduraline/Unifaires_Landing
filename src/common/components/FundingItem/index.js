import NextImage from "common/components/NextImage";
import React from "react";
import styled from "styled-components";

const FundingItemStyles = styled.div`
  min-width: 500px;
  .header-wrapper {
    display: flex;
    gap: 10px;
  }
  .left-section {
    img {
      width: 180px;
    }
  }
  .right-section {
    h6 {
      font-weight: bold;
      font-size: 32px;
      color: #5832da;
      -webkit-transition: 0.5s;
      &:hover {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        cursor: pointer;
      }
    }
    p {
      font-size: 16px;
      line-height: 185%;
      color: #4d4d4d;
    }
  }
`;
export default function index() {
  return (
    <FundingItemStyles>
      <div className="header-wrapper">
        <div className="left-section">
          <img src="./image/item.svg" alt="image" />
        </div>
        <div className="right-section">
          <h6>IBM TechU - IBM Power10</h6>
          <p>
            This credential earner demonstrates an understanding of the new
            advances in Power Systems technology with Power10. This includes
            skills and knowledge in the following topics: key features and
            characteristics of the Power10 microprocessor and much more.
          </p>
        </div>
      </div>
    </FundingItemStyles>
  );
}
