import React from "react";
import AccordionMargin from "common/components/Accordion";
import ClickableChips from "common/components/Chips";
import SecondaryChips from "common/components/SecondaryChip";
import FilterCard from "../../../common/components/FilterCard";
import DegreeCard from "../../../common/components/DegreeCard";
import JobCard from "../../../common/components/JobCard";
import { SingleCourseStyles } from "./SingleJob.Style";
import ListUi from "common/components/ListUi";
import { courseList } from "common/data/categoryData";

// make reusable component for this and super dry

export default function SingleCourse() {
  return (
    <SingleCourseStyles className="container">
      <section>
        <div className="title-wrapper">
          <div className="brand-section">
            <img src="../images/ms.svg" alt="" />
            <h6>Github</h6>
          </div>

          <div className="call-to-action">
            <button className="secondary-button">Save For Later</button>
            <button className="default-btn">Apply Now</button>
          </div>
        </div>

        <div className="inner-wrapper">
          <div className="left-section">
            <h6>Product Designer, Documentation</h6>
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
              <ListUi
                title="What we're looking for:"
                desc="Product Designers at GitHub are given a lot of autonomy and
                trust to work on our most impactful design projects. For this
                specific role, we're looking for someone who values the
                following"
                points={courseList}
              />
              <ListUi title="Responsibilities" points={courseList} />
              <ListUi title="You might be a fit if" points={courseList} />
              <ListUi
                title=" These qualifications will help you stand out"
                points={courseList}
              />
              <br />

              <span>Who We Are</span>
              <p>
                Who We Are: GitHub is the developer company. We make it easier
                for developers to be developers: to work together, to solve
                challenging problems, and to create the world’s most important
                technologies. We foster a collaborative community that can come
                together—as individuals and in teams—to create the future of
                software and make a difference in the world.
              </p>
              <br />

              <span>Leadership Principles</span>
              <p>
                Leadership Principles: Customer Obsessed - Trust by Default -
                Ship to Learn - Own the Outcome - Growth Mindset - Global
                Product, Global Team - Anything is Possible - Practice Kindness
              </p>

              <br />

              <span>Why You Should Join</span>
              <p>
                Why You Should Join: At GitHub, we constantly strive to create
                an environment that allows our employees (Hubbers) to do the
                best work of their lives. We've designed one of the coolest
                workspaces in San Francisco (HQ), where many Hubbers work,
                snack, and create daily. The rest of our Hubbers work remotely
                around the globe. Check out an updated list of where we can hire
                here: https://github.com/about/careers/remote We are also
                committed to keeping Hubbers healthy, motivated, focused and
                creative. We've designed our top-notch benefits program with
                these goals in mind. In a nutshell, we've built a place where we
                truly love working, we think you will too. GitHub is made up of
                people from a wide variety of backgrounds and lifestyles. We
                embrace diversity and invite applications from people of all
                walks of life. We don't discriminate against employees or
                applicants based on gender identity or expression, sexual
                orientation, race, religion, age, national origin, citizenship,
                disability, pregnancy status, veteran status, or any other
                differences. Also, if you have a disability, please let us know
                if there's any way we can make the interview process better for
                you; we're happy to accommodate! Please note that benefits vary
                by country. If you have any questions, please don't hesitate to
                ask your Talent Partner.
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
            <FilterCard
              title="Match your skills with the required Job skills for the role:"
              dropDown="Product Designer, Documentation"
            />
          </div>
        </div>
      </section>

      {/* similar course section */}

      <div className="similar__course container">
        <div className="header">
          <h6>Recommended Courses on Missing Job Skills</h6>
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
          <h6>Similar Jobs</h6>
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
    </SingleCourseStyles>
  );
}
