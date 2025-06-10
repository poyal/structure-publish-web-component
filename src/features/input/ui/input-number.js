import {Component} from '/src/shared/core';

class InputNumber extends Component {
  template() {
    return `<input type="number"/>`;
  }

  setEvent() {
    this.querySelector('input').addEventListener('change', (event) => {
      this.dispatchEvent(new CustomEvent('@change', {detail: event.target.value}));
    });

    this.querySelector('input').addEventListener('keypress', (event) => {
      this.dispatchEvent(new CustomEvent('@input', {detail: event.target.value}));
    });
  }
}

customElements.define('input-number', InputNumber);
