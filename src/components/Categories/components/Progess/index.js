import React from "react";
import { Progress } from "reactstrap";
import styled from "styled-components";

const ProgressStyles = styled.div`
  .progress {
    flex: 0.85;
    height: 56px;
    border-radius: 12px;
    background: rgba(88, 50, 218, 0.08);
    .progress-bar {
      background: rgba(88, 50, 218, 0.1);
      display: flex;
      align-items: flex-start;
      padding: 0 15px;
      color: #5832da;
      font-size: 16px;
    }

    .progress-bar:last-child {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
  .header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    h6 {
      text-transform: uppercase;
      color: rgba(18, 53, 91, 0.3);
      font-weight: bold;
      font-size: 24px;
    }
  }
  .stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .innerWrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    p {
      color: #4d4d4d;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      i {
        font-size: 20px;
      }
    }
  }
`;

export default function index() {
  return (
    <ProgressStyles className="container">
      <div className="header">
        <h6>TOP JOB TITLE INSIGHTS</h6>
        <h6>POSTINGS</h6>
      </div>
      <div className="stats">
        <div className="innerWrapper">
          <Progress value="25">Product Manager</Progress>
          <p>
            (1291 Postings) <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
        <div className="innerWrapper">
          <Progress value={50}>Site Reliabilty Engineer</Progress>
          <p>
            (845 Postings) <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
        <div className="innerWrapper">
          <Progress value={75}>Automation Architect</Progress>
          <p>
            (688 Postings) <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
        <div className="innerWrapper">
          <Progress value="100">Product Specialist</Progress>
          <p>
            (432 Postings)<i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
        <div className="innerWrapper">
          <Progress value="90">Product Manager</Progress>
          <p>
            (291 Postings) <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
      </div>
    </ProgressStyles>
  );
}
