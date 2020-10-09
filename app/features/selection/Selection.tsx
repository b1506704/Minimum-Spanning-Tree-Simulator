import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Selection.css';
import routes from '../../constants/routes.json';
import { newG, loadG, selectMode } from './selectionSlice';

export default function Selection() {
  const dispatch = useDispatch();
  const value = useSelector(selectMode);
  return (
    <div className={styles.background}>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <div className="fa fa-arrow-left fa-3x fa-inverse"> </div>
        </Link>
      </div>
      <Link to={routes.DASHBOARD}>
        <button
          type="button"
          onClick={() => {
            dispatch(newG());
          }}
          className={styles.box}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <line className={styles.top} x1="0" y1="0" x2="900" y2="0" />
            <line className={styles.left} x1="0" y1="460" x2="0" y2="-920" />
            <line
              className={styles.bottom}
              x1="300"
              y1="460"
              x2="-600"
              y2="460"
            />
            <line className={styles.right} x1="300" y1="0" x2="300" y2="1380" />
          </svg>
          <h3>New Graph</h3>
          <span> __________ </span>
          <span> Start a new route </span>
        </button>
      </Link>

      <button
        type="button"
        onClick={() => {
          dispatch(loadG());
        }}
        className={styles.box}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <line className={styles.top} x1="0" y1="0" x2="900" y2="0" />
          <line className={styles.left} x1="0" y1="460" x2="0" y2="-920" />
          <line
            className={styles.bottom}
            x1="300"
            y1="460"
            x2="-600"
            y2="460"
          />
          <line className={styles.right} x1="300" y1="0" x2="300" y2="1380" />
        </svg>
        <h3>Load Graph</h3>
        <span> __________ </span>
        <span>
          Continue a route
          <br />
          {value}
        </span>
      </button>
    </div>
  );
}
