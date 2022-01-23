import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav as UiNav,
  NavItem as UiNavItem,
  NavLink as UILink,
} from "reactstrap";
// ** Icons Imports
import SearchPanelWrapper from "./searchPanel.style";
import styled from "styled-components";
import { Text } from "common/style";

const Heading = styled.h1`
  font-weight: bold;
  font-size: 44px;
  color: rgba(88, 50, 218, 0.9);
  padding-left: 25px;
  padding-top: 50px;
`;
//  Nav
const Nav = styled(UiNav)`
  background: #ffff;
  border-radius: 200px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 200px;
`;
const NavLink = styled(UILink)`
  color: red;
  -webkit-transition: 0.5s;
  &.active {
    background: #5832da !important;
    padding: 10px;
    border-radius: 150px;
    span {
      color: white;
    }
    &:hover,
    &:focus {
    }
  }
`;

const NavItem = styled(UiNavItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: bold;
    margin-right: 10px;
    font-size: 16px;
    color: rgba(77, 77, 77, 0.3);
  }
`;

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  .right-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    p {
      font-size: 20px;
      color: #000000;
      line-height: 200%;
      opacity: 0.4;
    }
  }

  .left-section {
    display: flex;
    align-items: baseline;
    gap: 20px;
  }
`;

const MainSection = styled.div`
  padding: 0 30px;
  margin-top: 50px;

  .top-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    h5 {
      font-weight: bold;
      font-size: 20px;
      text-transform: uppercase;
      color: #12355b;
      opacity: 0.3;
    }
  }
  .certs-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;
const CertStyles = styled.button`
  border: none;
  cursor: pointer;
  width: 250px;
  height: ${(props) => (props.org ? "128px" : "90px")};
  background: ${(props) =>
    props.primary ? "rgba(88, 50, 218, 0.1)" : "rgba(192, 118, 84, 0.1)"};
  display: flex;
  border-radius: ${(props) => (props.job ? "96px" : "24px")};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 20px;
    color: ${(props) => (props.primary ? "#5832DA;" : "#C07654;")};
    font-weight: 400;
  }
`;

const SearchPanel = () => {
  // ** State
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  // FIXME: Create level one and level two of the search component
  return (
    <SearchPanelWrapper>
      <Heading>Search</Heading>
      <HeaderStyles>
        <div className="right-section">
          <p>Certifications</p>
        </div>
        <div className="left-section">
          <Nav pills>
            <NavItem>
              <NavLink
                active={active === "1"}
                onClick={() => {
                  toggle("1");
                }}
              >
                <span className="align-middle">All</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === "2"}
                onClick={() => {
                  toggle("2");
                }}
              >
                <span className="align-middle">Certifications</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === "4"}
                onClick={() => {
                  toggle("4");
                }}
              >
                <span className="align-middle">Jobs</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === "3"}
                onClick={() => {
                  toggle("3");
                }}
              >
                <span className="align-middle">Organizations</span>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </HeaderStyles>
      <TabContent className="py-50" activeTab={active}>
        {/* TODO:  Make All component */}
        <TabPane tabId="1">
          <MainSection>
            <div className="top-wrapper">
              <h5>Top CERTIFICATIONS</h5>
              <Text>
                See all <i class="ri-arrow-right-s-line"></i>
              </Text>
            </div>
            <div className="certs-wrapper">
              <CertStyles primary>
                <p>Project Management</p>
              </CertStyles>

              <CertStyles>
                <p>CyberSecurity</p>
              </CertStyles>
              <CertStyles primary>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles>
                <p>Risk Analysis</p>
              </CertStyles>
            </div>
          </MainSection>
          {/* Job sections */}

          <MainSection>
            <div className="top-wrapper">
              <h5>Top Jobs</h5>
              <Text>
                See all <i class="ri-arrow-right-s-line"></i>
              </Text>
            </div>
            <div className="certs-wrapper">
              <CertStyles primary job>
                <p>Project Management</p>
              </CertStyles>

              <CertStyles job>
                <p>Sales Associate</p>
              </CertStyles>
              <CertStyles primary job>
                <p>Software Engineer</p>
              </CertStyles>
              <CertStyles job>
                <p>Automation Architect</p>
              </CertStyles>
            </div>
          </MainSection>
        </TabPane>
        {/* TODO:  Make Certification component */}
        {/* Certification */}
        <TabPane tabId="2">
          <MainSection>
            <div className="top-wrapper">
              <h5>Top CERTIFICATIONS</h5>
              <Text>
                See all <i class="ri-arrow-right-s-line"></i>
              </Text>
            </div>
            <div className="certs-wrapper">
              <CertStyles primary>
                <p>Project Management</p>
              </CertStyles>

              <CertStyles>
                <p>CyberSecurity</p>
              </CertStyles>
              <CertStyles primary>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles>
                <p>Risk Analysis</p>
              </CertStyles>
              <CertStyles primary>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles>
                <p>Project Management</p>
              </CertStyles>
            </div>
          </MainSection>
        </TabPane>

        {/* Jobs */}
        {/* TODO:  Make job component */}
        <TabPane tabId="4">
          <MainSection>
            <div className="top-wrapper">
              <h5>Top Jobs</h5>
              <Text>
                See all <i class="ri-arrow-right-s-line"></i>
              </Text>
            </div>
            <div className="certs-wrapper">
              <CertStyles primary job>
                <p>Project Management</p>
              </CertStyles>

              <CertStyles job>
                <p>CyberSecurity</p>
              </CertStyles>
              <CertStyles primary job>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles job>
                <p>Risk Analysis</p>
              </CertStyles>
              <CertStyles primary job>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles job>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary job>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles job>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary job>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles job>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary job>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles job>
                <p>Project Management</p>
              </CertStyles>
            </div>
          </MainSection>
        </TabPane>

        {/* Organisation */}
        {/* TODO:  Make Organisation component */}
        <TabPane tabId="3">
          <MainSection>
            <div className="top-wrapper">
              <h5>Top Organisations</h5>
              <Text>
                See all <i class="ri-arrow-right-s-line"></i>
              </Text>
            </div>
            <div className="certs-wrapper">
              <CertStyles primary org>
                <p>Project Management</p>
              </CertStyles>

              <CertStyles org>
                <p>CyberSecurity</p>
              </CertStyles>
              <CertStyles primary org>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles org>
                <p>Risk Analysis</p>
              </CertStyles>
              <CertStyles primary org>
                <p>Business Intelligence</p>
              </CertStyles>
              <CertStyles org>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary org>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles org>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary org>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles org>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles primary org>
                <p>Project Management</p>
              </CertStyles>
              <CertStyles org>
                <p>Project Management</p>
              </CertStyles>
            </div>
          </MainSection>
        </TabPane>
      </TabContent>
    </SearchPanelWrapper>
  );
};

export default SearchPanel;
