import {Component} from '/src/shared/core';

class ButtonRed extends Component {
  template() {
    let slot = this.slot;

    if (!this.slot) {
      slot = 'RED';
    }

    return `<button type="button" class="button-red">${slot}</button>`;
  }

  setEvent() {
    this.querySelector('button').addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('@click', event));
    });
  }
}

customElements.define('button-red', ButtonRed);
