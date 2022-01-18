import NextImage from "common/components/NextImage";
import React, { useState, useContext } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  NavBtnLinkSecondary,
  SearchBar,
} from "./NavbarElements";
import Button from "common/components/Button";
import styled from "styled-components";
import { DrawerContext } from "common/contexts/DrawerContext";
import HamburgMenu from "common/components/HamburgMenu";
import Drawer from "common/components/Drawer";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import { Icon } from "react-icons-kit"

import SearchPanel from "../SearchPanel";
import { openModal, closeModal } from "@redq/reuse-modal";
import { menuData } from "common/data/Interior";
import lang from "../../../public/images/home-two/lang.svg";
import globe from "../../../public/images/home-two/glob.svg";


const Menu = styled(ScrollSpyMenu)`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;

  li {
    padding: 10px;
  }
  a {
    color: #5832da;
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  a:hover {
    cursor: pointer;
    border-bottom: black 1px solid;
  }
`;
const Hamburg = styled(HamburgMenu)`
 display: none;
  color: #fff;


  @media screen and (max-width: 1000px) {
    margin-top: 10px;
    order: 2;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  span {
    background-color: white;
  }`

  
const MenuDrawer = styled(Drawer)`
  button {
     
    border-radius: 999px;
    background-color: #5832da;
    border: 0;
    font-size: 10px;
    padding: 10px;
    margin: 10px;
    color: white;
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);

    &:hover {
      background-color: white;
      color: #5832da;
      border: 1px solid #5832da;
    }
  }
`;

const SearchButton = styled(Button)`

@media screen and (min-width: 1000px) {
    display: none;   
}
display: flex;
align-items: center;
justify-content: center;
order: 1;
background: rgba(255, 255, 255, 0.2);

border-radius: 9999px;
border: none;
color: white;
padding: 10px;;
`


  
  const CloseModalButtonAlt = () => (
    <Button
      className="modalCloseBtn alt"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );
  
const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }
  const handleSearchModal = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" },
        animationTo: { transform: "translateY(0)" }, //
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <>
      <div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
        <Nav>
          <NavLink to="/">
            <Logo>Unifaires</Logo>
          </NavLink>

     <div>
          <SearchButton
            variant="textButton"
            onClick={handleSearchModal}
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search button"
          />
          </div>
         
          <div style={{ display: "flex", alignItems:"center"}}>
         
                  <MenuDrawer
                    width="250px"
                    placement="right"
                    drawerHandler={<Hamburg />}
                    open={state.isOpen}
                    toggleHandler={toggleHandler}
                  >
                    <button
                      type="button"
                      className={state.isOpen ? "active" : ""}
                      onClick={toggleHandler}
                      aria-label="drawer toggle button"
                    >
                      <Icon icon={androidClose} />
                    </button>
                    
                    <Menu
                      menuItems={menuData}
                      drawerClose={true}
                      offset={-100}
                    />
                  </MenuDrawer>
                </div>
          <NavMenu>
            <NavLink to="/about" activeStyle>
              Services
            </NavLink>
            {/* // SEARCH component FIXME: Change this to pure Styled components. */}
            <div className="nav-widget-form nav-widget-form-bg ">
              <form className="search-form">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search for anything "
                />
                <button type="submit">
                  <i className="ri-search-line"></i>
                </button>
              </form>
            </div>
            <NavLink>
              <NextImage
                src={lang}
                width={25}
                height={25}
                alt=""
                className="svg_logo"
              />
            </NavLink>

            <NavLink to="/about" activeStyle>
              Unifairs Bussiness
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              About
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Pricing
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLinkSecondary to="/signin">Log In</NavBtnLinkSecondary>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </div>
    </>
  );
};

export default NavBar;
