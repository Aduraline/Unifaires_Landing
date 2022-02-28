import React from "react";
import Head from "next/head";
import styled from "styled-components";
import AccordionMargin from "common/components/Accordion";
import ClickableChips from "common/components/Chips";
import SecondaryChips from "common/components/SecondaryChip";
import FilterCard from "../../../common/components/FilterCard";
import DegreeCard from "../../../common/components/DegreeCard";
import JobCard from "../../../common/components/JobCard";
import { SingleJobStyles } from "./SingleCourse.Styles";

export default function SingleCourse() {
  return (
    <SingleJobStyles className="container">
      <Head>
        <title>Unifaires| Course name </title>
      </Head>
      <section>
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

              <ListUi points={courseList} title="What you’ll learn:" />
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
            <FilterCard
              title="Match this course skills with a job role"
              dropDown="Web 2.0 Front-End Developer"
            />
          </div>
        </div>
      </section>

      {/* similar course section */}

      <div className="similar__course container">
        <div className="header">
          <h6>Similar Courses</h6>
          <p>
            View All <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
        <div className="card-section">
          <DegreeCard />
          <DegreeCard />
          <DegreeCard />
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="similar__course container">
        <div className="header">
          <h6>Recommended Jobs</h6>
          <p>
            View All <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
        <div className="card-section">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </SingleJobStyles>
  );
}
