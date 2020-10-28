import React from 'react';
import styles from './BottomMenu.css';

export default function BottomMenu() {
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
                checked
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
        <form className={styles.graph_form} id="form">
          <label htmlFor="first_vertex" className={styles.graph_label}>
            From
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
          <span className={styles.graph_no}> Edge 1 </span>
        </form>
        <form className={styles.graph_form}>
          <label htmlFor="second_vertex" className={styles.graph_label}>
            From
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
          <span className={styles.graph_no}> Edge 2 </span>
        </form>
        <form className={styles.graph_form}>
          <label htmlFor="third_vertex" className={styles.graph_label}>
            From
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
          <span className={styles.graph_no}> Edge 3 </span>
        </form>
        <form className={styles.graph_form}>
          <label htmlFor="fourth_vertex" className={styles.graph_label}>
            From
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
          <span className={styles.graph_no}> Edge 4 </span>
        </form>
      </div>
    </div>
  );
}
