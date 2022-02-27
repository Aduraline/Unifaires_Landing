import React from "react";
import styled from "styled-components";

const BreadCrumbStyles = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  .category-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: white;
    height: 112px;
    padding: 0 15px;

    filter: drop-shadow(0px 4px 8px rgba(182, 182, 182, 0.15));
    .main-category {
      p {
        font-weight: bold;
        font-size: 20px;
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
        -webkit-transition: 0.5s;
        &:hover {
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
          cursor: pointer;
          color: #5832da;
        }
      }
    }
  }
`;
export default function BreadCrumbs({
  childCategory,
  parentCategory,
  subParentCategory,
}) {
  return (
    <BreadCrumbStyles>
      <div className="category-nav">
        <div className="main-category">
          <p>{parentCategory}</p>
        </div>
        <img src="../images/bread.svg" alt="image" />
        {subParentCategory && (
          <>
            <div className="main-category">
              <p>{subParentCategory}</p>
            </div>
            <img src="../images/bread.svg" alt="image" />
          </>
        )}

        {childCategory.map((item, idx) => (
          <div key={`child${idx}`} className="category">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </BreadCrumbStyles>
  );
}
