import React from 'react';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux';
import { logClick, getLogState } from './floatLogSlice';
import { getSendLogState, sendLog } from '../../features/graph/sendLogSlice';
import styles from './FloatLog.css';

export default function FloatLog() {
  const dispatch = useDispatch();
  const isLogShow = useSelector(getLogState).isClick;
  const receivedLog = useSelector(getSendLogState);
  function onShowLog() {
    dispatch(logClick(!isLogShow));
  }
  function onClear() {
    dispatch(sendLog(''));
  }
  return (
    <Draggable bounds="html">
      <div id="menu" className={styles.container_menu}>
        <div className={styles.title_bar}>
          <button type="button" className={styles.clear_btn} onFocus={onClear}>
            &#x2326;
          </button>
          Log
          <button type="button" className={styles.exit_btn} onFocus={onShowLog}>
            &#x2716;
          </button>
        </div>
        <textarea
          className={styles.log}
          value={receivedLog}
          readOnly
          // onChange={() => {
          //   //
          // }}
        >
          {' '}
        </textarea>
      </div>
    </Draggable>
  );
}
