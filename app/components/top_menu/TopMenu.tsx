import React from 'react';
import styles from './TopMenu.css';

export default function TopMenu() {
  return (
    <div className={styles.top}>
      <div>| Engine |</div>
      <button type="button" className={styles.start}>
        &#x25B6;
      </button>
      <button type="button" className={styles.pause}>
        &#x23F8;
      </button>
      <button type="button" className={styles.dash}>
        &#x23ED;
      </button>
    </div>
  );
}
