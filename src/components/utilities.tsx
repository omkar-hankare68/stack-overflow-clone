import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`

const Utilities = () => {
  return (
    <Div>
      <h3>All Questions</h3>
      <p>Total Questions: <span>###</span></p>
      <Link passHref={true} href="/questions/ask">
        <button type="button">Ask a Question</button>
      </Link>
    </Div>
  );
};

export default Utilities;
