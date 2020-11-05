import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Dashboard.css';
import routes from '../../constants/routes.json';
import TopPanel from '../../containers/TopPanel';
import BottomPanel from '../../containers/BottomPanel';
import GraphPanel from '../../containers/GraphPanel';

export default function Dashboard() {
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
