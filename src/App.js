import React from "react";

import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import dropdownData from "./data/dropdown/data";
import colourStyles from "./data/dropdown/styles";

import styles from "./styles/App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Dropdown options={dropdownData} styles={colourStyles} default={null} />
      </div>
      <Footer name={"Karthik S"} email={"lit2021012@iiitl.ac.in"} />
    </>
  );
};

export default App;
