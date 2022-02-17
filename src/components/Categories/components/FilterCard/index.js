import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import FilterDropdown from "./FilterDropDown";

const FilterCardStyles = styled.div`
  .MuiCard-root {
    background: #ffffff;
    border-radius: 32px;
    height: 724px;
    padding: 32px;
    box-shadow: none;

    h5 {
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
      color: #5832da;
      margin-bottom: 12px;
      flex-grow: 1;
    }

    h6 {
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      color: #5832da;
      margin: 20px 0px;
    }

    .job-skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 48px;

      .skill {
        background: #5832da;
        border-radius: 36px;
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        h6 {
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          color: #ffffff;
          text-transform: capitalize;
          padding: 0 10px 0 10px;
        }
      }

      .light {
        background: #eeeafb !important;
        border-radius: 36px;
        h6 {
          color: #5832da;
          text-transform: capitalize;
        }
      }
    }

    .skills-you-have {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;

      .skill {
        background: #5832da;
        border-radius: 36px;
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        h6 {
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          color: #ffffff;
          text-transform: capitalize;
          padding: 0 10px 0 10px;
        }
      }
    }

    .skill-offered {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 48px;

      .skill {
        background: #5832da;
        border-radius: 36px;
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        h6 {
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          color: #ffffff;
          text-transform: capitalize;
          padding: 0 10px 0 10px;
        }
      }
      .light {
        background: #eeeafb !important;
        border-radius: 36px;
        h6 {
          color: #5832da;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export default function FilterCard() {
  return (
    <FilterCardStyles>
      <Card sx={{ width: 504 }}>
        <CardContent>
          <Typography variant="h5">
            Match this study area with a Job title
          </Typography>
          <div className="dropdown">
            {/* TODO: fix the issue with flex & width somehow */}
            <FilterDropdown />
          </div>

          <Typography variant="h6">Skills this study program offers</Typography>
          {/* FIXME: Create a separate reuseable component */}
          <div className="skill-offered">
            <div className="skill">
              <h6>Java</h6>
            </div>
            <div className="skill">
              <h6>Javascript</h6>
            </div>

            <div className="skill">
              <h6>Html</h6>
            </div>

            <div className="skill">
              <h6>Html</h6>
            </div>
            <div className="skill light">
              <h6>CSS</h6>
            </div>
            <div className="skill light">
              <h6>JQuery</h6>
            </div>
            <div className="skill light">
              <h6>React</h6>
            </div>
            <div className="skill light">
              <h6>Node.js</h6>
            </div>
            <div className="skill light">
              <h6>Vue</h6>
            </div>
            <div className="skill light">
              <h6>Python</h6>
            </div>
            <div className="skill light">
              <h6>MySQL</h6>
            </div>
          </div>
          <Typography variant="h6">Skills you currently have</Typography>
          <div className="skills-you-have">
            <div className="skill">
              <h6>Java</h6>
            </div>
            <div className="skill">
              <h6>Javascript</h6>
            </div>

            <div className="skill">
              <h6>Html</h6>
            </div>

            <div className="skill">
              <h6>Html</h6>
            </div>
          </div>

          <Typography variant="h6">SKILL GAPS IN SELECTED JOB ROLE</Typography>
          <div className="job-skills">
            <div className="skill light">
              <h6>CSS</h6>
            </div>
            <div className="skill light">
              <h6>JQuery</h6>
            </div>
            <div className="skill light">
              <h6>React</h6>
            </div>
            <div className="skill light">
              <h6>Node.js</h6>
            </div>
            <div className="skill light">
              <h6>Vue</h6>
            </div>
            <div className="skill light">
              <h6>Python</h6>
            </div>
            <div className="skill light">
              <h6>MySQL</h6>
            </div>
          </div>
        </CardContent>
      </Card>
    </FilterCardStyles>
  );
}
