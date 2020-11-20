import React from 'react';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FloatMenu.css';
import { logClick, getLogState } from './floatLogSlice';

export default function FloatMenu() {
  const dispatch = useDispatch();
  const isLogShow = useSelector(getLogState);
  function exit() {
    window.close();
  }
  function save() {
    //
  }
  function showAppInfo() {
    // FloatInfo.prototype();
  }
  function configureShip() {
    //
  }
  function showEnergy() {
    //
  }
  function onShowLog() {
    dispatch(logClick(!isLogShow));
  }
  return (
    <Draggable bounds="html">
      <div className={styles.container_menu}>
        <button id="btn" type="button" className={styles.float_button}>
          &#x1F680;
        </button>
        <div className={styles.menu}>
          <button
            className={styles.menu_item}
            id={styles.power}
            type="button"
            onFocus={exit}
          >
            &#x23FB;
          </button>
          <button
            className={styles.menu_item}
            id="save"
            type="button"
            onFocus={save}
          >
            &#x1F5AB;
          </button>
          <button
            className={styles.menu_item}
            id="info"
            type="button"
            onFocus={showAppInfo}
          >
            &#x1f6c8;
          </button>
          <button
            className={styles.menu_item}
            id="energy"
            type="button"
            onFocus={showEnergy}
          >
            &#x1F50B;
          </button>
          <button
            className={styles.menu_item}
            id="log"
            type="button"
            // onClick={onShowLog}
            onFocus={onShowLog}
          >
            &#x1F4DC;
          </button>
          <button
            className={styles.menu_item}
            id="modify}"
            type="button"
            onFocus={configureShip}
          >
            &#9875;
          </button>
        </div>
      </div>
    </Draggable>
  );
}
