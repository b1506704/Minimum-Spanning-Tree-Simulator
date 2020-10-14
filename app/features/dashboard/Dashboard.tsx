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
  // let counter = 0;
  const btnPanel = document.getElementById('btnPanel');
  function addEdge() {
    btnPanel?.append('<div> Dumbtext </div>');
  }
  return (
    <div className={styles.background}>
      <div className={styles.stars} />
      <div className={styles.twinkling} />
      <button className={styles.engine} type="button" onClick={addEdge}>
        {' '}
      </button>
      <div className={styles.top}>
        <div>| Engine |</div>
        <button type="button" className={styles.start}>
          Start
        </button>
        <button type="button" className={styles.pause}>
          Pause
        </button>
        <button type="button" className={styles.next}>
          Next
        </button>
        {/* <div className={styles.display_panel}>
          <div> MoonX </div>
          <textarea className={styles.display}> </textarea>
          <button type="button" className={styles.log}>
            Log
          </button>
        </div> */}
      </div>
      <div className={styles.bottom} id="btnPanel">
        <div className={styles.title}>| ROUTES |</div>
        <form className={styles.graph_form} id="form">
          <label htmlFor="first_vertex" className={styles.graph_label}>
            1st_Edge
            <select className={styles.graph_select} name="first_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> to </span>
            <select className={styles.graph_select} name="first_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> = </span>
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              name="firstEdge"
              value="15"
            />
          </label>
          <input type="button" className={styles.graph_save} value="Save" />
        </form>
        <form className={styles.graph_form}>
          <label htmlFor="second_vertex" className={styles.graph_label}>
            2nd_Edge
            <select className={styles.graph_select} name="second_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> to </span>
            <select className={styles.graph_select} name="first_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> = </span>
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              name="firstEdge"
              value="15"
            />
          </label>
          <input type="button" className={styles.graph_save} value="Save" />
        </form>
        <form className={styles.graph_form}>
          <label htmlFor="third_vertex" className={styles.graph_label}>
            3rd_Edge
            <select className={styles.graph_select} name="third_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> to </span>
            <select className={styles.graph_select} name="first_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> = </span>
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              name="firstEdge"
              value="15"
            />
          </label>
          <input type="button" className={styles.graph_save} value="Save" />
        </form>
        <form className={styles.graph_form}>
          <label htmlFor="fourth_vertex" className={styles.graph_label}>
            4th_Edge
            <select className={styles.graph_select} name="forth_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> to </span>
            <select className={styles.graph_select} name="first_vertex">
              <option value="Earth"> Earth </option>
              <option value="Mars"> Mars </option>
              <option value="Venus"> Venus </option>
            </select>
            <span> = </span>
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              name="firstEdge"
              value="15"
            />
          </label>
          <input type="button" className={styles.graph_save} value="Save" />
        </form>
      </div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.SELECTION}>
          <div className="fa fa-arrow-left fa-3x fa-inverse" />
        </Link>
      </div>
      <div className={styles.map}>
        <div> </div>
      </div>
    </div>
  );
}
