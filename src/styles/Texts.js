import styled from "styled-components";
export const TitleStyled = styled.h2`
  font-size: ${({ fontSize }) => fontSize || "32px"};
  font-weight: bold;
  color: ${({ color }) => color || "#000"};
`;

export const SpanStyled = styled.span`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ color }) => color || "#000"};
`;
