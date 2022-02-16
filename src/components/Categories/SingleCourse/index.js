import React from "react";
import Head from "next/head";
import styled from "styled-components";
import AccordionMargin from "common/components/Accordion";
import ClickableChips from "common/components/Chips";
import SecondaryChips from "common/components/SecondaryChip";
import FilterCard from "../components/FilterCard";

const SingleCourseStyles = styled.div`
  .main-section {
    background: #f3f5f7;
    border-radius: 32px;

    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 64px;

      .brand-section {
        display: flex;
        align-items: end;
        gap: 32px;

        h6 {
          font-weight: 600;
          font-size: 30px;
          color: #12355b;
        }
      }

      .call-to-action {
        display: flex;
        align-items: center;
        gap: 18px;

        .secondary-button {
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
          color: #fff;
          font-weight: 500;
          -webkit-transition: 0.5s;
          &:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
            cursor: pointer;
          }
        }
      }
    }
    .inner-wrapper {
      padding-right: 64px;
      padding-left: 64px;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 30px;

      /* left section */
      .left-section {
        h6 {
          font-weight: bold;
          font-size: 32px;
          color: #5832da;
        }
        .pills {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
        }

        .desc {
          p {
            font-size: 16px;
            line-height: 180%;
            color: #4d4d4d;
          }
          span {
            font-weight: bold;
            font-size: 20px;
          }
        }

        .accordion-main {
          background: rgba(238, 234, 251, 0.5);
          border-radius: 8px 12px 12px 8px;
          height: 346px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          border-left: 8px solid #5832da;
          margin-bottom: 96px;
        }

        .accordion__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 40px;
          margin-bottom: 16px;

          h5 {
            font-size: 16px;
            line-height: 120%;
            color: #ada8be;
          }
          .lesson-info {
            display: flex;
            align-items: baseline;
            gap: 16px;
            .number_of_lessons {
              display: flex;
              align-items: center;
              gap: 10px;
              p {
                font-size: 12px;
                line-height: 120%;
                color: #000000;
              }
            }
            .duration_for_lesson {
              display: flex;
              align-items: center;
              gap: 10px;
              p {
                font-size: 12px;
                line-height: 120%;
                color: #000000;
              }
            }
          }
        }
      }
    }
  }
`;

export default function SingleCourse() {
  return (
    <SingleCourseStyles>
      <Head>
        <title>Unifaires| Course name </title>
      </Head>
      <div className="main-section container">
        <div className="title-wrapper">
          <div className="brand-section">
            <img src="../images/ms.svg" alt="" />
            <h6>Unifaires Grants</h6>
          </div>

          <div className="call-to-action">
            <button className="secondary-button">Add to cart</button>
            <button className="default-btn">Buy Now</button>
          </div>
        </div>
        <div className="inner-wrapper">
          <div className="left-section">
            <h6>JavaScript Complete Beginners Course For Web 2.0</h6>
            <div className="pills">
              <ClickableChips title="Senior" />
              <SecondaryChips title="4 weeks" secondary />
            </div>
            <div className="desc">
              <p>
                IBM is recognized as a cognitive solutions and cloud platform
                company with one purpose - to be essential to the world. We do
                this in part through innovative learning and credentialing
                programs that help develop and recognize the talent that fuels
                innovation to change the world. IBM's Digital Badge Program
                represents our latest endeavor for recognizing this talent
                through secure, verifiable digital credentials representing
                skill, achievement, and contribution. Earn and share your badge
                today!
              </p>

              <span>What you’ll learn:</span>
              <p>
                * Design responsive and accessible experiences that work across
                multiple platforms.
                <br />
                * Become an authority on our visual design language, extending
                upon our existing systems—such as our color system, navigation
                components, and interaction patterns.
                <br />
                * Provide regular design feedback and direction to your
                coworkers.
                <br />
                * Seek out opportunities for connecting with people and teams
                working on related projects.
                <br />* Build meaningful relationships across the product,
                engineering, and other cross-functional partners you're working
                with.
              </p>
            </div>
            <div className="accordion__header">
              <h5>LESSONS</h5>
              <div className="lesson-info">
                <div className="number_of_lessons">
                  <img src="../images/book.svg" alt="book" />
                  <p>9 Lessons</p>
                </div>
                <div className="duration_for_lesson">
                  <img src="../images/clock.svg" alt="book" />
                  <p>150hrs</p>
                </div>
              </div>
            </div>
            <div className="accordion-main">
              <AccordionMargin />
            </div>
          </div>

          <div className="right-section">
            <FilterCard />
          </div>
        </div>
      </div>
      {/* 3.  Similar Courses section */}
    </SingleCourseStyles>
  );
}
