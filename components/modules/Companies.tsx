import styles from "./Companies.module.css";

import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";

function Companies() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;
