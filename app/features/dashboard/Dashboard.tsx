import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Dashboard.css';
import routes from '../../constants/routes.json';
import TopPanel from '../../containers/TopPanel';
import BottomPanel from '../../containers/BottomPanel';
import GraphPanel from '../../containers/GraphPanel';
// import {
//   selectCount,
// } from './dashboardSlice';

export default function Dashboard() {
  // const dispatch = useDispatch();
  // const value = useSelector(selectCount);
  // let counter = 0;
  // const switchLeft = document.getElementById('switch_left');
  // const switchRight = document.getElementById('switch_right');
  // const checkbox = document.getElementById('checkbox');
  // function onSwitch() {
  //   // if (switchLeft) switchLeft.style.animationName = '';
  //   // if (checkbox) checkbox
  // }
  return (
    <div className={styles.background}>
      <TopPanel />
      <BottomPanel />
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.SELECTION}>
          <div className="fa fa-arrow-left fa-3x fa-inverse" />
        </Link>
      </div>
      <GraphPanel />
    </div>
  );
}
