import React from "react";
import {
  UncontrolledButtonDropdown as UIDrop,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import styled from "styled-components";

const UncontrolledButtonDropdown = styled(UIDrop)`
  margin-bottom: 48px;

  .dropdown-toggle {
    align-self: center;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f7f5fd;
    border-radius: 12px;
    padding: 18px 24px;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    /* text */
    font-size: 16px;
    line-height: 150%;
    color: #5832da;
    text-transform: capitalize;
    i {
      color: #5832da;
    }
    -webkit-transition: 0.5s;
    &:hover {
      /* add something here */
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
    font-weight: bold;
    box-shadow: none !important;
  }
`;

export default function FilterDropdown({ dropDown }) {
  return (
    <div>
      <UncontrolledButtonDropdown>
        <DropdownToggle caret>
          {dropDown} <i class="ri-arrow-down-s-line"></i>
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
