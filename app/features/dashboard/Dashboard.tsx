import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Dashboard.css';
import routes from '../../constants/routes.json';
import TopPanel from '../../containers/TopPanel';
import BottomPanel from '../../containers/BottomPanel';
import GraphPanel from '../../containers/GraphPanel';
import { getLogState } from '../../components/float_menu/floatLogSlice';
import { getConfigureState } from '../../components/float_menu/floatConfigureSlice';
import FloatLog from '../../containers/FloatLogPanel';
import FloatConfigure from '../../containers/FloatConfigurePanel';

export default function Dashboard() {
  const isLogShow = useSelector(getLogState);
  const isConfigureShow = useSelector(getConfigureState);
  return (
    <div className={styles.background}>
      <TopPanel />
      <BottomPanel />
      {isLogShow && <FloatLog />}
      {isConfigureShow && <FloatConfigure />}
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.SELECTION}>
          <div className="fa fa-arrow-left fa-3x fa-inverse" />
        </Link>
      </div>
      <GraphPanel />
    </div>
  );
}
