import styled from "styled-components";

export const HeadingText = styled.p`
display: flex;
align-items: center;
opacity: 0.9;
font-size: 45px;
color: #c07654;
margin-bottom: 20px;
font-weight: 600;
@media screen and (max-width: 480px) {
  font-size: 24px;
}
`
export const Heading = styled.p`
font-size: 20px;
display: flex;
align-items: center;
color: #000000;
@media screen and (max-width: 480px) {
  font-size: 14px;
}
`;

export const Text = styled.p`
font-size: 20px;
display: flex;
align-items: center;
color: #c07654;
opacity: 0.9;
@media screen and (max-width: 480px) {
  font-size: 14px;
}
`;