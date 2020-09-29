import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="title">
        <span> Welcome to Minimum Spanning Tree Simulator </span>
        <br />
        <span> - IMMENSE SPACE - </span>
        <br />
        <Link to={routes.COUNTER}>
          <span> to Counter </span>
        </Link>
      </div>
    </div>
  );
}
