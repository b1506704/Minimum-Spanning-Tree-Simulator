import React from 'react';
import styles from './FloatMenu.css';

// const { remote } = require('electron');

export default function FloatMenu() {
  function exit() {
    window.close();
    // const w = remote.getCurrentWindow();
    // w.close();
  }
  return (
    <div className={styles.container_menu}>
      <button id="btn" type="button" className={styles.float_button}>
        MoonX
      </button>
      <div className={styles.menu}>
        <button className={styles.menu_item} type="button" onClick={exit}>
          Exit
        </button>
        <button className={styles.menu_item} type="button">
          Edit
        </button>
        <button className={styles.menu_item} type="button">
          Info
        </button>
        <button className={styles.menu_item} type="button">
          Log
        </button>
        <button className={styles.menu_item} type="button">
          Save
        </button>
        <button className={styles.menu_item} type="button">
          Pilot
        </button>
      </div>
    </div>
  );
}
