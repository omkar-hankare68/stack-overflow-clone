import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
const Item = styled.li`
  display: inline;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 100px 100px;
`;

const Nav = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#42b0d5",
          width: "100%",
          height: "50px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          top: "0",
          position: "absolute",
        }}
      >
        <Div>
          <Item>Maersk Logo</Item>
          <Item><Link href="/about">About</Link></Item>
          <Item><Link href="/">Home</Link></Item>
          <Item><Link href="/signin">Sign</Link></Item>
        </Div>
      </nav>
    </>
  );
};

export default Nav;
