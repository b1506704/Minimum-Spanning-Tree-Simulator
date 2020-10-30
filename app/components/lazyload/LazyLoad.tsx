import React from 'react';
import styles from './LazyLoad.css';

export default function LazyLoad(): JSX.Element {
  return (
    <div className={styles.container} id="container">
      <div className={styles.loader}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
        <div className={styles.bar4} />
        <div className={styles.bar5} />
        <div className={styles.bar6} />
        <div className={styles.bar7} />
        <div className={styles.bar8} />
        <div className={styles.bar9} />
        <div className={styles.bar10} />
      </div>
      <div className={styles.top_overlay} id="top_overlay" />
      <div className={styles.loading_icon}> </div>
      <div className={styles.bottom_overlay} id="bottom_overlay" />
    </div>
  );
}
