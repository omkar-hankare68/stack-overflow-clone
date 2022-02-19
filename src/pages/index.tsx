import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <MFEComponent /> */}
      <Head>
        <title>Anchor Flow</title>
        <meta name="description" content="Anchor Flow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to St@ck OverFlow</h1>
      <button>
        <Link href="/questions/all"> Go to all questions</Link>
      </button>
    </div>
  );
};

export default Home;
