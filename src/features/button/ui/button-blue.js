import {Component} from '/src/shared/core';

class ButtonBlue extends Component {
  template() {
    let slot = this.slot;

    if (!this.slot) {
      slot = 'BLUE';
    }

    return `<button type="button" class="button-blue">${slot}</button>`;
  }

  setEvent() {
    this.querySelector('button').addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('@click', event));
    });
  }
}

customElements.define('button-blue', ButtonBlue);
