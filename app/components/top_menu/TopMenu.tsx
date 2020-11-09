import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TopMenu.css';
import { buttonClick, getButtonState } from './buttonSlice';

export default function TopMenu() {
  const dispatch = useDispatch();
  const isClick = useSelector(getButtonState);
  function onStartClick() {
    // isClick.isClick= !isClick;
    dispatch(buttonClick(!isClick.isClick));
  }
  return (
    <div className={styles.top}>
      <button type="button" className={styles.start} onClick={onStartClick}>
        &#x25B6;
      </button>
      <button type="button" className={styles.pause}>
        &#x23F8;
      </button>
      <button type="button" className={styles.dash}>
        &#x23ED;
      </button>
      <div>| Engine |</div>
    </div>
  );
}
