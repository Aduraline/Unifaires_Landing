import { AccordionData } from "common/data/categoryData";
import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import styled from "styled-components";

const AccordionStyles = styled.div`
  .accordion-margin {
    .accordion-button::after {
      background-image: url("../images/chevrondown.svg");
    }
    .accordion-button:focus {
      border-color: transparent !important;
      box-shadow: none;
      background-color: transparent !important;
    }
    .accordion-item {
      margin-top: 0.71rem;
      margin-bottom: 0.71rem;
      box-shadow: 0 2px 15px 0 rgba($black, 0.05) !important;
      border-radius: 8px;
      border: none;
      outline: none;
    }

    .accordion-button {
      border-radius: 8px !important;
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
      color: #12355b;
      &:not(.collapsed) {
        font-weight: bold;
        font-size: 17px;
        line-height: 150%;
        color: #12355b;
      }
    }
  }
`;
const AccordionMargin = ({ lessonInfo }) => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  return (
    <AccordionStyles>
      <Accordion className="accordion-margin" open={open} toggle={toggle}>
        {AccordionData?.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader targetId={item.id}>{item.title}</AccordionHeader>
            <AccordionBody accordionId={item.id}>{item.desc}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </AccordionStyles>
  );
};
export default AccordionMargin;
