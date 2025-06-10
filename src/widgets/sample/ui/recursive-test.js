import {Component} from '/src/shared/core';

class RecursiveTest extends Component {
  static observedAttributes = ['step'];

  template() {
    const nowSlot = parseInt(this.props['step']);
    const parseSlot = nowSlot + 1;

    return `
    <h1>Recursive - ${nowSlot}</h1>
    ${parseSlot <= 10 ? `<recursive-test step="${parseSlot}"></recursive-test>` : ''}
    `;
  }
}

customElements.define('recursive-test', RecursiveTest);
