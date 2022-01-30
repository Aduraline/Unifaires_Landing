import React, { useState } from "react";
import styled from "styled-components";
import {
  TabContent,
  TabPane,
  Nav as UiNav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import useToggle from "common/hooks/useToggle";
// create three cards
// use the logics in the service modal
// Display grid for all the three section

const Nav = styled(UiNav)`
  .nav-link {
    p {
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      display: flex;
      align-items: center;
      -webkit-transition: 0.5s;
      color: #808080;
    }
    &.active,
    &.activeList {
      p {
        background: none;
        color: #5832da !important;
      }
    }
    &.active,
    &.activeList {
      background: none;
      color: #5832da !important;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 20px;
  margin-bottom: 20px;
`;
const CategoryItem = styled.p`
  font-weight: 500;
  font-size: 15px;
  min-width: 300px;
  padding: 0 15px;
  color: #808080;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 25px;
  }
  -webkit-transition: 0.5s;
  &:hover {
    background: none;
    color: #5832da;
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;
const CareerItem = styled(CategoryItem)`
  margin-left: -20px;
`;

const Card = styled.div`
  width: 300px;
  height: 600px;
  overflow-x: hidden;
  padding: 0 15px;
  border-right: 2px solid whitesmoke;

  h6 {
    margin-top: 20px;
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 20px;
    color: rgba(103, 103, 103, 1);
    padding: 0 15px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .no-border {
    border-right: none;
    width: 320px;
  }
`;

const Buttonn = styled(Button)`
  width: 118px;
  height: 38px;

  border: none;
  background: ${(props) =>
    props.secondary ? "rgba(125, 191, 16, 0.5)" : " #5832DA"} !important;
  border-radius: 19px;
  p {
    color: ${(props) => (props.secondary ? "#7DBF10;" : "white")};
    font-weight: 900;
    font-size: 15px;
  }
`;
const ServiceDropDown = () => {
  // ** State
  const [activeList, setActiveList] = useState();
  const [active, setActive] = useState();
  // For the category sector list
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  // For the career sector list
  const toggleList = (tab) => {
    if (activeList !== tab) {
      setActiveList(tab);
    }
  };

  const [isOn, toggleIsOn] = useToggle(false);
  const [isOn2, toggleIsOn2] = useToggle(false);
  // TODO: Build out reusable component for different navigation levels
  // 1. For the Services
  // 2. Career Sector
  // 3. Category Section
  // 4. Use toggle function for the 2 and 3 cards
  // 5. When  the user mousehover on the services section then we display the job sector
  // 6. When the mouse hover on the job section then we display the careers
  return (
    <GridContainer>
      <Card>
        <h6>Category</h6>
        <Nav pills>
          <NavItem>
            <NavLink
              // TODO: activelist is the list of all the services
              active={activeList === "1"}
              onClick={() => {
                toggleList("1"), toggleIsOn();
              }}
            >
              <CareerItem>
                Jobs, Education & Funding <i class="ri-arrow-right-s-line"></i>
              </CareerItem>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // TODO: activelist is the list of all the services
              // FIXME: for this to work go into the TobContent with  activeTab={activeList}
              // Then add <TabPane tabId="2">
              active={activeList === "2"}
              onClick={() => {
                toggleList("2");
              }}
            >
              <CareerItem>
                Testing API <i class="ri-arrow-right-s-line"></i>
              </CareerItem>
            </NavLink>
          </NavItem>
        </Nav>
      </Card>
      {/* Second section */}
      {isOn ? (
        <Card>
          <h6>Job Sector</h6>
          <TabContent activeTab={activeList}>
            <TabPane tabId="1">
              <Fade up delay={100}>
                <Nav pills>
                  <NavItem>
                    <NavLink
                      active={active === "11"}
                      onClick={() => {
                        toggle("11"), toggleIsOn2();
                      }}
                    >
                      <CareerItem>
                        Architecture <i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === "12"}
                      onClick={() => {
                        toggle("12");
                      }}
                    >
                      <CareerItem>
                        Sports Massage <i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      active={active === "13"}
                      onClick={() => {
                        toggle("13");
                      }}
                    >
                      <CareerItem>
                        {" "}
                        Holistic Medicine<i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === "14"}
                      onClick={() => {
                        toggle("14");
                      }}
                    >
                      <CareerItem>
                        EFT (Emotional Freedom Technique)
                        <i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === "15"}
                      onClick={() => {
                        toggle("15");
                      }}
                    >
                      <CareerItem>
                        {" "}
                        Facial Massage <i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === "16"}
                      onClick={() => {
                        toggle("16");
                      }}
                    >
                      <CareerItem>
                        {" "}
                        Spiritual Healing<i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === "17"}
                      onClick={() => {
                        toggle("17");
                      }}
                    >
                      <CareerItem>
                        {" "}
                        Medical Terminology{" "}
                        <i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active={active === "18"}
                      onClick={() => {
                        toggle("18");
                      }}
                    >
                      <CareerItem>
                        {" "}
                        Acupuncture<i class="ri-arrow-right-s-line"></i>
                      </CareerItem>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Fade>
            </TabPane>
            {/* <TabPane tabId="2">
                 <h2>Testing the API</h2>
               </TabPane> */}
          </TabContent>
        </Card>
      ) : null}

      {/* Third Section */}
      {isOn2 ? (
        <Card className="no-border">
          <h6>Career</h6>
          <ButtonWrapper>
            <Buttonn>
              <p>Study Area</p>{" "}
            </Buttonn>
            <Buttonn secondary>
              <p>Major</p>{" "}
            </Buttonn>
          </ButtonWrapper>
          <TabContent activeTab={active}>
            <Fade up delay={100}>
              <TabPane tabId="11">
                <Link href="/categories">
                  <CategoryItem>
                    3D printing & architecture
                    <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Agile, DevOps, product, project & customer s...
                    <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Business, processes, development banking...{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Cloud computing solutions{" "}
                    <i class="ri-arrow-right-s-line"></i>{" "}
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Vocational education & training - culinary arts...{" "}
                    <i class="ri-arrow-right-s-line"></i>{" "}
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Data science & analytics across disciplines...{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Engineering <i class="ri-arrow-right-s-line"></i>{" "}
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Chemistry <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    GIS, environmental engineering science & re...{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
                <Link href="/categories">
                  <CategoryItem>
                    Global communication & data-driven journalism{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </CategoryItem>
                </Link>
              </TabPane>
            </Fade>
            <TabPane tabId="12">{/* TODO: ADD  career sector */}</TabPane>
            <TabPane tabId="13">{/* TODO: ADD  career sector */}</TabPane>
          </TabContent>
        </Card>
      ) : null}
    </GridContainer>
  );
};

export default ServiceDropDown;
