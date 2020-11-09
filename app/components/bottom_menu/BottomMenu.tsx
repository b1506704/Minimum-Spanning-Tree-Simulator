import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEdgeID,
  getEdgeSource,
  getEdgeTarget,
  getEdgeWeight,
  addEdgeID,
  addEdgeSource,
  addEdgeTarget,
  addEdgeWeight,
} from '../../features/graph/edgeSlice';
import styles from './BottomMenu.css';

export default function BottomMenu() {
  const currentEdgeID = useSelector(getEdgeID);
  const currentEdgeSource = useSelector(getEdgeSource);
  const currentEdgeTarget = useSelector(getEdgeTarget);
  const currentEdgeWeight = useSelector(getEdgeWeight);
  const dispatch = useDispatch();
  return (
    <div className={styles.bottom} id="btnPanel">
      <div className={styles.title}>
        | Graph Data |
        <div className={styles.map_panel}>
          <div className={styles.map_label}> Map </div>
          <div className={styles.map_option}>
            <span className={styles.connected_regions_label}>
              Connected Regions
            </span>
            <label className={styles.switch} htmlFor="check_connection">
              <input type="checkbox" id="checkbox" name="check_connection" />
              <span className={styles.switch_left} id="switch_left">
                On
              </span>
              <span className={styles.switch_right} id="switch_right">
                Off
              </span>
            </label>
          </div>
          <div className={styles.map_option}>
            <span className={styles.connected_regions_label}>
              Graph Information
            </span>
            <label className={styles.switch} htmlFor="check_connection">
              <input
                type="checkbox"
                id="checkbox"
                name="check_connection"
                // onClick={onSwitch}
                // checked
              />
              <span className={styles.switch_left} id="switch_left">
                On
              </span>
              <span className={styles.switch_right} id="switch_right">
                Off
              </span>
            </label>
          </div>
          <div className={styles.map_option}>
            <span className={styles.connected_regions_label}>
              Additional Setting
            </span>
            <label className={styles.switch} htmlFor="check_connection">
              <input
                type="checkbox"
                id="checkbox"
                name="check_connection"
                // onClick={onSwitch}
              />
              <span className={styles.switch_left} id="switch_left">
                On
              </span>
              <span className={styles.switch_right} id="switch_right">
                Off
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.graph_panel}>
        <div className={styles.graph_panel_label}> Routes </div>
        <form
          className={styles.graph_form}
          // onSubmit={onSubmitHandler}
          id="form"
        >
          <label htmlFor="second_vertex" className={styles.graph_label}>
            From
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              value={currentEdgeID}
              onChange={(e) => dispatch(addEdgeID(e.target.value))}
            />
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              value={currentEdgeSource}
              onChange={(e) => dispatch(addEdgeSource(e.target.value))}
            />
            <span> to </span>
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              value={currentEdgeTarget}
              onChange={(e) => dispatch(addEdgeTarget(e.target.value))}
            />
            <span> = </span>
            <input
              type="text"
              id={styles.firstEdge}
              className={styles.graph_value}
              name="firstEdge"
              value={currentEdgeWeight}
              onChange={(e) => dispatch(addEdgeWeight(Number(e.target.value)))}
            />
          </label>
          <input
            type="submit"
            className={styles.graph_save}
            value="&#x1F5AB;"
          />
          <span className={styles.graph_no}>{currentEdgeID}</span>
        </form>
      </div>
    </div>
  );
}
