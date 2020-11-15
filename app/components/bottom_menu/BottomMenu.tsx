import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNodeID,
  addNodeLabel,
  getNodeID,
} from '../../features/graph/nodeSlice';
import {
  getEdgeID,
  addEdgeID,
  addEdgeSource,
  addEdgeTarget,
  addEdgeWeight,
} from '../../features/graph/edgeSlice';
import { switchCheck, getSwitchState } from './switchSlice';
import { submitNode, submitEdge } from './submitSlice';
import styles from './BottomMenu.css';

export default function BottomMenu() {
  const dispatch = useDispatch();
  const isCheck = useSelector(getSwitchState);
  let currentEdgeSource = '';
  let currentEdgeTarget = '';
  let currentEdgeWeight = 0;
  let currentNodeID: string;
  let currentNodeLabel: string;
  let isShowGraphInfoChecked: boolean;
  let isShowSetting: boolean;
  function onNodeSubmitHandler() {
    dispatch(submitNode(true));
    dispatch(addNodeID(currentNodeID));
    dispatch(addNodeLabel(currentNodeLabel));
    const nID = document.getElementById('n_id') as HTMLInputElement;
    const nLabel = document.getElementById('n_label') as HTMLInputElement;
    nID.value = '';
    nLabel.value = '';
  }
  function onEdgeSubmitHandler() {
    dispatch(submitEdge(true));
    dispatch(addEdgeSource(currentEdgeSource));
    dispatch(addEdgeTarget(currentEdgeTarget));
    dispatch(addEdgeWeight(currentEdgeWeight));
    dispatch(addEdgeID(currentEdgeSource + currentEdgeTarget));
    const eSource = document.getElementById('e_source') as HTMLInputElement;
    const eTarget = document.getElementById('e_target') as HTMLInputElement;
    const eWeight = document.getElementById('e_weight') as HTMLInputElement;
    eSource.value = '';
    eTarget.value = '';
    eWeight.value = '';
  }
  function onShowGraphInfoSwitch() {
    isShowGraphInfoChecked = !isShowGraphInfoChecked;
  }
  function onCheckConnectionSwitchOff() {
    dispatch(switchCheck(false));
  }
  function onCheckConnectionSwitchOn() {
    dispatch(switchCheck(true));
  }
  function onShowSettingSwitch() {
    isShowSetting = !isShowSetting;
  }
  return (
    <div className={styles.bottom} id="btnPanel">
      <div className={styles.title}>
        | Graph Data |
        <div className={styles.map_panel}>
          <div className={styles.map_label}> Map </div>
          <div className={styles.map_option}>
            <span className={styles.connected_regions_label}>
              Connected Components
            </span>
            <label className={styles.switch} htmlFor="check_connection">
              <input
                type="checkbox"
                id="checkbox"
                name="check_connection"
                checked={isCheck.isCheck}
                onChange={function doNothing() {
                  //
                }}
              />
              <span className={styles.switch_left} id="switch_left">
                On
              </span>
              <span className={styles.switch_right} id="switch_right">
                Off
              </span>
              <button
                type="button"
                className={styles.switch_right}
                onFocus={onCheckConnectionSwitchOff}
                // id="switch_right"
              >
                {}
              </button>
              <button
                type="button"
                className={styles.switch_left}
                onFocus={onCheckConnectionSwitchOn}
                // id="switch_right"
              >
                {}
              </button>
            </label>
          </div>
          <div className={styles.map_option}>
            <span className={styles.connected_regions_label}>
              Graph Information
            </span>
            <label className={styles.switch} htmlFor="show_graph_info">
              <input
                type="checkbox"
                id="checkbox"
                name="show_graph_info"
                onChange={onShowGraphInfoSwitch}
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
            <label className={styles.switch} htmlFor="show_setting">
              <input
                type="checkbox"
                id="checkbox"
                name="show_setting"
                onChange={onShowSettingSwitch}
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
        <form className={styles.graph_form} id="edge_form">
          <label htmlFor="edge_editor" className={styles.graph_label}>
            <span> From </span>
            <input
              type="text"
              id="e_source"
              onChange={function setEdgeSource(e) {
                currentEdgeSource = e.target.value;
              }}
            />
            <span> to </span>
            <input
              type="text"
              id="e_target"
              onChange={function setEdgeTarget(e) {
                currentEdgeTarget = e.target.value;
              }}
            />
            <span> = </span>
            <input
              type="text"
              id="e_weight"
              onChange={function setEdgeWeight(e) {
                currentEdgeWeight = Number(e.target.value);
              }}
            />
          </label>
          <input
            type="button"
            onFocus={onEdgeSubmitHandler}
            value="&#x1F5AB;"
          />
          <span className={styles.graph_no}>
            Edge:
            {useSelector(getEdgeID)}
          </span>
        </form>
        <form className={styles.graph_form} id="node_form">
          <label htmlFor="node_editor" className={styles.graph_label}>
            <span> ID </span>
            <input
              type="text"
              id="n_id"
              onChange={function setNodeID(e) {
                currentNodeID = e.target.value;
              }}
            />
            <span> Label </span>
            <input
              type="text"
              id="n_label"
              onChange={function setNodeLabel(e) {
                currentNodeLabel = e.target.value;
              }}
            />
          </label>
          <input
            type="button"
            onFocus={onNodeSubmitHandler}
            value="&#x1F5AB;"
          />
          <span className={styles.graph_no}>
            Node:
            {useSelector(getNodeID)}
          </span>
        </form>
      </div>
    </div>
  );
}
