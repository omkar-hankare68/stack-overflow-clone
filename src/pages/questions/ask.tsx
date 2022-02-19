import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Nav from "@/components/nav";

const Ask = () => {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <h1>Ask a Question</h1>
      <div>
        
      </div>
      <button type="button">
        <Link href="/"> Go to Home </Link>
      </button>
    </div>
  );
};

export default Ask;
