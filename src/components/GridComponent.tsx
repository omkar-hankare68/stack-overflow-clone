import React from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import QuestionComponent from "@/components/QuestionComponent";
import Utilities from "@/components/utilities";

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto;
  border-style: solid;
  width: 100%;
  margin-top: 100px;
  gap: 10px 10px;
  padding: 1rem;
`;

const GridItem = styled.div`
  background-color: #35aaaa;
  width: 100%;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridComponent = () => {
  return (
    <GridDiv>
      <GridItem className={styles.left}>
        <h2>Left</h2>
      </GridItem>
      <GridItem className={styles.utility}>
        <Utilities></Utilities>
      </GridItem>
      <GridItem className={styles.right}>
        <h2>Right</h2>
      </GridItem>
      <GridItem className={styles.allqts}>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
        <QuestionComponent></QuestionComponent>
      </GridItem>
    </GridDiv>
  );
};

export default GridComponent;
