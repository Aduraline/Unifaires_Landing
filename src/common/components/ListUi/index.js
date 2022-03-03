import React from "react";
import styled from "styled-components";

const ListStyles = styled.div`
  padding-top: 48px;
  span {
    font-weight: bold;
    font-size: 20px;
  }

  li {
    font-size: 16px;
    color: #12355b;
    list-style: none;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
`;
export default function ListUi({ title, points, desc }) {
  return (
    <ListStyles>
      <span>{title}</span>
      <p>{desc && desc}</p>
      <ul>
        {points?.map((item, idx) => (
          <li key={idx}>
            {" "}
            <span>•</span> {item}
          </li>
        ))}
      </ul>
    </ListStyles>
  );
}
