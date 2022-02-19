import type { NextPage } from "next";
import Head from "next/head";
import Nav from "@/components/nav";
import styles from "../../styles/Home.module.css";
import GridComponent from "@/components/GridComponent";
import Footer from "@/components/Footer";
const All: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stackover Flow Clone</title>
        <meta name="description" content="Anchor Flow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <GridComponent></GridComponent>
      <Footer></Footer>
    </div>
  );
};

export default All;
