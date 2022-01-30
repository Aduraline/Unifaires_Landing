import NextImage from "common/components/NextImage";
import React from "react";
import styled from "styled-components";
// icon
import Microsoft from "../../../../public/images/ms.svg";

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 384px;
  padding: 0 20px;
  background: rgba(18, 53, 91, 0.05);
  border-radius: 16px;
  .card__header {
    display: flex;
    align-items: center;

    gap: 20px;
    h1 {
      font-weight: bold;
      font-size: 20px;
      color: #5832da;
    }
  }

  .card__button {
    display: flex;
    align-items: center;
    gap: 20px;
    .full {
      background: #12355b !important;
    }
    button {
      width: 104px;
      height: 28px;
      border: none;
      background-color: #c07654;
      border-radius: 48px;
      color: white;
      font-weight: bold;
    }
  }

  .card__body {
    margin-top: 20px;
    margin-bottom: 20px;
    p {
      color: #4d4d4d;
      font-size: 16px;
    }
  }
  .card__footer {
    display: flex;
    align-items: center;
    gap: 20px;
    .full {
      border-radius: 8px;
      background: rgba(18, 53, 91, 0.05);
      color: #5832da;
      border: 1px solid #5832da;
    }
    button {
      width: 192px;
      height: 48px;
      background: #5832da;
      border-radius: 8px;
      border: none;
      color: white;
      font-weight: bold;
    }
  }
`;
export default function Card() {
  return (
    <CardStyles>
      <div className="card__header">
        <NextImage width={60} src={Microsoft} />
        <div>
          <h1>Director of Product Design</h1>
          <div className="card__button">
            <button primary>Manager</button>
            <button className="full">Full-Time</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card__body">
          <p>
            We are looking for a visionary design mastermind to lead the way in
            connecting our products together into a cohesive ecosystem that
            serves as foundational to our platform platform strategy and is
            built on creating value for our users.
          </p>
        </div>
        <div className="card__footer">
          <button>Apply Now</button>
          <button className="full">Shortlist</button>
        </div>
      </div>
    </CardStyles>
  );
}
