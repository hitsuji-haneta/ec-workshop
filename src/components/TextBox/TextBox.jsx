import React from "react";
import styled from "styled-components";

import MessageArea from "./MessageArea";
import ActionArea from "./ActionArea";

const Wrapper = styled.div`
  width: 90%;
  @media screen and (min-width: 740px) {
    height: 45%;
  }
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextBox = () => (
  <Wrapper>
    <MessageArea />
    <ActionArea />
  </Wrapper>
);

export default TextBox;
