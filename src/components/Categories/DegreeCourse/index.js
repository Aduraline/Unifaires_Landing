import NextImage from "common/components/NextImage";
import styled from "styled-components";
import { Input, Label } from "reactstrap";
import Fade from "react-reveal/Fade";
// icon
import SettingIcon from "../../../public/images/Setting.svg";
import Dropdown from "../Dropdown";
import DegreeCard from "../components/DegreeCard";

const DegreeCourseStyles = styled.div`
  margin-bottom: 70px;
  padding-top: 50px;
  .header {
    h1 {
      font-weight: bold;
      font-size: 44px;
      color: #5832da;
    }
  }

  .subheaderWrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 30px;
    h6 {
      font-size: 22px;
      color: rgba(18, 53, 91, 0.5);
      span {
        color: #5832da;
        font-weight: bold;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 20px;

      p {
        font-size: 20px;
        color: rgba(18, 53, 91, 0.5);
      }
    }
  }

  .filter-section {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  .pagination {
    margin-top: 20px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    gap: 30px;
    .prev {
      p {
        font-weight: bold;
        font-size: 20px;
        color: rgba(88, 50, 218, 0.1);
      }
    }
    .next {
      p {
        font-weight: bold;
        font-size: 20px;
        color: #5832da;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .total {
      font-weight: bold;
      font-size: 20px;

      /* or 36px */

      color: #12355b;
    }
  }
  .result-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen {
    }
    grid-gap: 40px;
  }
`;
export default function index() {
  return (
    <DegreeCourseStyles className="container">
      <div className="header">
        <h1>Degree, Courses & Certifications</h1>
      </div>
      <div className="subheaderWrapper">
        <h6>
          under <span>“Product Designer”</span>, Job title in{" "}
          <span>“Fintech” </span>Industry
        </h6>
        <div className="right-section">
          <Label for="exampleCustomSwitch" className="form-check-label">
            <p>Short Courses Alerts</p>
          </Label>
          <div className="form-check form-switch">
            <Input type="switch" name="customSwitch" id="exampleCustomSwitch" />
          </div>
          <NextImage src={SettingIcon} />
        </div>
      </div>
      <div className="filter-section">
        <Dropdown title="course TITLE" />
        <Dropdown title="course level" />
        <Dropdown title="course MODE" />
        <Dropdown title="EXPERTISE & SKILLS" />
        <Dropdown title="SKILL MODE" />
        <Dropdown title="Language" />
      </div>
      <div className="pagination">
        <div className="prev">
          <p>Previous</p>
        </div>
        <div className="total">Showing - 9 of 446</div>
        <div className="next">
          <p>
            Next <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
      </div>

      <div className="result-section">
        {/* build  card component and reuse it */}
        <Fade up delay={100}>
          <DegreeCard />
          <DegreeCard />
          <DegreeCard />
          <DegreeCard />
          <DegreeCard />
          <DegreeCard />
        </Fade>
      </div>
    </DegreeCourseStyles>
  );
}
