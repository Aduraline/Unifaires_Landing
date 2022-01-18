import SearchModal from "components/Layout/SearchModal";
import React, { useContext, useState } from "react";
import NextImage from "common/components/NextImage";
import styled from "styled-components";
import Link from "../../../utils/ActiveLink";
import { DrawerContext } from "common/contexts/DrawerContext";
import HamburgMenu from "common/components/HamburgMenu";
import Drawer from "common/components/Drawer";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import { Icon } from "react-icons-kit";
// Icons
import { menuData } from "common/data/Interior";
import lang from "../../../public/images/home-two/lang.svg";
import globe from "../../../public/images/home-two/glob.svg";

const Logo = styled.h5`
  min-width: 160px;
  min-height: 48px;
  font-weight: 500;
  font-size: 34px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #ffffff !important;
`;

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
  span {
    background-color: white;
  }
`;
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
const ContainerStyle = styled.div`
  @media (max-width: 1300px) {
    display: none !important;
  }
`;

const NavbarTwo = () => {
  const { state, dispatch } = useContext(DrawerContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <>
      {/* For mobile devices */}
      <ContainerStyle>
        <div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
      
          <div
            className={
              showMenu ? "show desktop-nav nav-area" : "desktop-nav nav-area"
            }
          >
            {/* For desktop devices */}
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light ">
                <Link href="/">
                  <Logo>Unifaires</Logo>
                </Link>

                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Services
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="nav-widget-form nav-widget-form-bg">
                  <form className="search-form">
                    <input
                      type="search"
                      className="form-control"
                      placeholder=" Jobs, Education, & Funding | Search for anything "
                    />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>

                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NextImage
                        src={globe}
                        width={25}
                        height={25}
                        alt=""
                        className="svg_logo"
                      />
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        English
                      </a>
                    </li>
                    <li className="nav-item">
                      <NextImage
                        src={lang}
                        alt=""
                        width={25}
                        height={25}
                        className="svg_logo"
                      />
                    </li>
                  </ul>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MenuDrawer
                    width="420px"
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
              </nav>
            </div>
          </div>

          <div className="mobile-nav">
            <div
              className="search-btn global-pointer"
              onClick={() => toggleSearchModal()}
            >
              <a data-bs-toggle="modal" data-bs-target="#searchmodal">
                <i className="ri-search-line"></i>
              </a>
            </div>
          </div>

          <div className="side-nav-responsive">
            <div className="container-max">
              {/* <div className="dot-menu" onClick={() => toggleWallet()}>
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <SearchModal
          showSearchModal={showSearchModal}
          toggleSearchModal={toggleSearchModal}
        />
      </ContainerStyle>
    </>
  );
};

export default NavbarTwo;
