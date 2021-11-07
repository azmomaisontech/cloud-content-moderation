import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2em;
`;


type FlexBoxProps = {
  justifyContent?: "space-between",
  alignItems? : "center";
  flexWrap?: "wrap" | "no-wrap";
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent ?? "space-between"};
  align-items: ${({alignItems}) => alignItems ?? "center"};
`
