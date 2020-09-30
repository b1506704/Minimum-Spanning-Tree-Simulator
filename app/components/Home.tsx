import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="title">
        <span>Minimum Spanning Tree</span>
        <br />
        <span>-Simulator-</span>
        <br />
        <Link to={routes.COUNTER}>
          <div className="subtitle"> Press any key to continue </div>
        </Link>
      </div>
    </div>
  );
}
