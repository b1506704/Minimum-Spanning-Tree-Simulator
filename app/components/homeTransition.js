/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
export default function transition() {
  window.onload = () => {
    const trigger = document.getElementById("trigger");
    trigger.addEventListener("click", () => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      let top_layer = document.getElementById("top_layer");
      top_layer?.classList.toggle("active");
      });
    }
  }
