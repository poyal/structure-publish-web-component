import {Component} from '/src/shared/core';

class InputText extends Component {
  template() {
    return `<input type="text">`;
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

customElements.define('input-text', InputText);
