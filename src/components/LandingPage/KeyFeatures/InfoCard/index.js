import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px -5px rgba(74, 42, 185, 0.12);
  border-radius: 12px;
  height: 490px;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: column;
  h6 {
    font-weight: bold;
    font-size: 16px;
    line-height: 120%;
    color: #b8bcca;
    margin-top: 24px;
    margin-bottom: 20px;
  }
  header {
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: rgba(88, 50, 218, 0.9);
    padding-bottom: 24px;
  }
  img {
    border-radius: 8px;
  }
  .desc {
    padding: 14px 0;
    margin-bottom: 20px;
    p {
      font-size: 16px;
      line-height: 180%;
      font-weight: 400;
      color: rgba(128, 128, 128, 0.9);
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  button {
    background: #5832da;
    border-radius: 6px;
    width: 190px;
    height: 40px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    /*  */

    font-size: 14px;
    line-height: 120%;
    font-weight: 500;
    color: #ffffff;
  }
`;
export default function InfoCard({ title, image }) {
  return (
    <InfoStyles>
      <h6>For Educational Organizations</h6>
      <header>{title}</header>
      <img src={image} alt="image" />
      <div className="desc">
        <p>
          Define your career path for yourself, or chart a great territory
          entirely; we’ve got your back either way. Define your career path for
          yourself, or chart a new territory entirely; we’ve got your back
          either way.
        </p>
      </div>
      <button className="default-btn">
        Search now<i class="ri-arrow-right-s-line"></i>
      </button>
    </InfoStyles>
  );
}
