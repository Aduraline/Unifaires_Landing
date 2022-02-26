import styled from "styled-components";

export const PrevButton = styled.div`
  position: relative;
  padding: 20px 12px;
  cursor: pointer;
  &:hover {
    span {
      background: #5832da;
      @media (min-width: 991px) {
        width: 120px;
      }
    }
  }
  span {
    width: 30px;
    height: 2px;
    background: #5832da;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: "";
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(-45deg);
      top: -4px;
      left: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(45deg);
      width: 8px;
      bottom: -6px;
      left: 1px;
    }
  }
`;

export const NextButton = styled.div`
  position: relative;
  padding: 20px 12px;
  cursor: pointer;
  &:hover {
    span {
      background: #5832da;
      @media (min-width: 991px) {
        width: 120px;
      }
    }
  }
  span {
    width: 30px;
    height: 2px;
    background: #5832da;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: "";
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(45deg);
      top: -4px;
      right: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(-45deg);
      width: 8px;
      bottom: -6px;
      right: 1px;
    }
  }
`;
