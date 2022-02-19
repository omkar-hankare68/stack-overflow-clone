import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 95%;
  border-style: solid;
  margin: 10px 10px 0 10px;
  display: flex;
  align-items: center;
`;

const QuestionComponent = () => {
  return (
    <Div>
      <img src="" alt="pfp" />
      <h3>Title</h3>
      <p>Description</p>
    </Div>
  );
};

export default QuestionComponent;
