import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #5832da;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  z-index: 10;

@media screen and (max-width: 768px) {
  display: none;
}
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled.h6`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  @media (max-width: 1024px) {
   font-size: 14px;
  }
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;
export const Logo = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: white;
  display: flex;
  align-items: center;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
 justify-content: space-between;

 height: 80px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  position: relative;
  align-items: center;
  border: none;
  cursor: pointer;
  display: inline-flex;
  min-width: 8rem;
  padding: 0 1.2rem;
  justify-content: center;
  font-weight: 600;
  user-select: none;
  vertical-align: bottom;
  white-space: nowrap;
  border-radius: 4px;
  background: #1c1d1f;
  padding: 10px 22px;
  color: #fff;

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavBtnLinkSecondary = styled(NavBtnLink)`
  color: #1c1d1f;
  background-color: white;
  border: 1px solid #1c1d1f;
  &:hover {
    transition: all 0.2s ease-in-out;
 border: 1px solid #fff;
color: white;
 background: transparent;
  
  }
`;


