import React from 'react';
import Draggable from 'react-draggable';
import styles from './FloatInfo.css';

export default function FloatInfo() {
  function exit() {
    window.close();
  }
  function save() {
    //
  }
  function showAppInfo() {
    //
  }
  function configureShip() {
    //
  }
  function showEnergy() {
    //
  }
  function showLog() {
    //
  }
  return (
    <Draggable bounds="html">
      <div className={styles.container_menu}>
        <button id="btn" type="button" className={styles.float_button}>
          &#x1F680;
        </button>
        <div className={styles.menu}>
          <button
            className={styles.menu_item}
            id={styles.power}
            type="button"
            onClick={exit}
          >
            &#x23FB;
          </button>
          <button
            className={styles.menu_item}
            id="save"
            type="button"
            onClick={save}
          >
            &#x1F5AB;
          </button>
          <button
            className={styles.menu_item}
            id="info"
            type="button"
            onClick={showAppInfo}
          >
            &#x1f6c8;
          </button>
          <button
            className={styles.menu_item}
            id="energy"
            type="button"
            onClick={showEnergy}
          >
            &#x1F50B;
          </button>
          <button
            className={styles.menu_item}
            id="log"
            type="button"
            onClick={showLog}
          >
            &#x1F4DC;
          </button>
          <button
            className={styles.menu_item}
            id="modify}"
            type="button"
            onClick={configureShip}
          >
            &#9875;
          </button>
        </div>
      </div>
    </Draggable>
  );
}
