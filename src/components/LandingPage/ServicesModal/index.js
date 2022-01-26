import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav as UiNav,
  NavItem,
  NavLink,
} from "reactstrap";
import Fade from "react-reveal/Fade";
// ** Icons Imports
import ServicePanelWrapper from "./servicePanel.style";
import styled from "styled-components";

const Nav = styled(UiNav)`
  .nav-link {
    p {
      cursor: pointer;
      font-size: 16px;
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
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
      }
    }
    &.active,
    &.activeList {
      background: none;
      color: #5832da !important;
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
  }
`;

const ServicesStyles = styled.div`
  padding-top: 3rem;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 1024px) {
    display: none;
  }

  h6 {
    margin-bottom: 2.3rem;
    font-weight: bold;
    font-size: 22px;
    color: rgba(103, 103, 103, 1);
    padding: 0 30px;
  }
  .column {
  }
  .nav-section {
    border-left: 2px solid #b8bcca;
    min-height: 75vh;
    padding: 0 30px;
  }
  .no-border {
    border-left: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const CategoryItem = styled.p`
  font-weight: 500;
  font-size: 16px;
  min-width: 320px;
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
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
`;
const CareerItem = styled(CategoryItem)`
  margin-left: -20px;
`;

const Button = styled.button`
  width: 118px;
  height: 38px;
  border: none;
  background: ${(props) =>
    props.secondary ? "rgba(125, 191, 16, 0.5)" : " #5832DA;"};
  border-radius: 19px;
  p {
    color: ${(props) => (props.secondary ? "#7DBF10;" : " white")};
    font-weight: 600;
  }
`;

const ServicePanel = () => {
  // ** State
  const [activeList, setActiveList] = useState("1");
  const [active, setActive] = useState("11");
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
  // TODO: Build out reusable component for different navigation levels
  // 1. For the Services
  // 2. Career Sector
  // 3. Category Section
  return (
    <ServicePanelWrapper>
      <ServicesStyles>
        <div className="column">
          <h6>Services</h6>
          <div className="nav-section no-border">
            <Nav pills>
              <NavItem>
                <NavLink
                  // TODO: activelist is the list of all the services
                  active={activeList === "1"}
                  onClick={() => {
                    toggleList("1");
                  }}
                >
                  <CareerItem>
                    Jobs, Education & Funding{" "}
                    <i class="ri-arrow-right-s-line"></i>
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
                  {/* <CareerItem>
                    Testing API <i class="ri-arrow-right-s-line"></i>
                  </CareerItem> */}
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>

        <div className="column">
          <h6>Career Sector</h6>
          <div className="nav-section">
            <TabContent activeTab={activeList}>
              <TabPane tabId="1">
                <Fade up delay={100}>
                  <Nav pills>
                    <NavItem>
                      <NavLink
                        active={active === "11"}
                        onClick={() => {
                          toggle("11");
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
                  </Nav>
                </Fade>
              </TabPane>
              {/* <TabPane tabId="2">
                <h2>Testing the API</h2>
              </TabPane> */}
            </TabContent>
          </div>
        </div>

        <div className="column">
          <h6>Categories</h6>
          <div className="nav-section">
            <ButtonWrapper>
              <Button>
                <p>Industry</p>{" "}
              </Button>
              <Button secondary>
                <p>Study Major</p>{" "}
              </Button>
            </ButtonWrapper>
            <TabContent activeTab={active}>
              <TabPane tabId="11">
                <CategoryItem>
                  3D printing & architecture{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
                <CategoryItem>
                  Agile, DevOps, product, project & customer s...{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
                <CategoryItem>
                  Business, processes, development banking...{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
                <CategoryItem>Cloud computing solutions</CategoryItem>
                <CategoryItem>
                  Vocational education & training - culinary arts...{" "}
                  <i class="ri-arrow-right-s-line"></i>{" "}
                </CategoryItem>
                <CategoryItem>
                  Data science & analytics across disciplines...{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
                <CategoryItem>
                  Engineering <i class="ri-arrow-right-s-line"></i>{" "}
                </CategoryItem>
                <CategoryItem>
                  Chemistry <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
                <CategoryItem>
                  GIS, environmental engineering science & re...{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
                <CategoryItem>
                  Global communication & data-driven journalism{" "}
                  <i class="ri-arrow-right-s-line"></i>
                </CategoryItem>
              </TabPane>

              <TabPane tabId="12">{/* TODO: ADD  career sector */}</TabPane>
              <TabPane tabId="13">{/* TODO: ADD  career sector */}</TabPane>
            </TabContent>
          </div>
        </div>
      </ServicesStyles>
    </ServicePanelWrapper>
  );
};

export default ServicePanel;
