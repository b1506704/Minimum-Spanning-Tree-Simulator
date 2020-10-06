import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../../constants/routes.json';
// import {
//   increment,
//   decrement,
//   incrementIfOdd,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';

export default function Counter() {
  // const dispatch = useDispatch();
  // const value = useSelector(selectCount);
  return (
    <div className={styles.background}>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={styles.box}>
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
      </div>
      <div className={styles.box}>
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
        <span>Continue a route</span>
      </div>
      {/* <div className={`counter ${styles.counter}`} data-tid="counter">
        {value}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(increment());
          }}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(decrement());
          }}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(incrementIfOdd());
          }}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(incrementAsync());
          }}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div> */}
    </div>
  );
}
