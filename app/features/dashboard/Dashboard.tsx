import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Dashboard.css';
import routes from '../../constants/routes.json';
// import {
//   selectCount,
// } from './dashboardSlice';
export default function Dashboard() {
  // const dispatch = useDispatch();
  // const value = useSelector(selectCount);
  return (
    <div className={styles.background}>
      <div className={styles.top}> Top Panel </div>
      <div className={styles.bottom}> Bottom Panel </div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.SELECTION}>
          <div className="fa fa-arrow-left fa-3x fa-inverse" />
        </Link>
      </div>
    </div>
  );
}
