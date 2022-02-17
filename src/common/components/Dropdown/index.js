import React from "react";
import {
  UncontrolledButtonDropdown as UIDrop,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import styled from "styled-components";

const UncontrolledButtonDropdown = styled(UIDrop)`
  .dropdown-toggle {
    background: rgba(128, 128, 128, 0.1);
    border-radius: 8px !important;
    border: none;
    font-weight: 500;
    color: rgba(18, 53, 91, 0.8);
    text-transform: uppercase;
    -webkit-transition: 0.5s;
    &:hover {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }

    &:after {
      display: none;
    }
    i,
    svg {
      margin-right: 0;
    }
  }
  .dropdown-toggle:focus {
    outline: none;
    background: rgba(88, 50, 218, 0.08);
    color: #5832da;
    font-weight: 500;
    box-shadow: none !important;
  }
`;

export default function Dropdown({ title }) {
  return (
    <div>
      <UncontrolledButtonDropdown>
        <DropdownToggle caret>
          {title} <i class="ri-arrow-down-s-line"></i>
        </DropdownToggle>
        <DropdownMenu>
          {/* TODO: Loop through the list items and display each option */}
          <DropdownItem href="/" tag="a">
            Option 1
          </DropdownItem>
          <DropdownItem href="/" tag="a">
            Option 2
          </DropdownItem>
          <DropdownItem href="/" tag="a">
            Option 3
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
  );
}
