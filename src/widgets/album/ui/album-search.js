import {Component} from '/src/shared/core';

class AlbumSearch extends Component {
  add = {
    number: null,
    text:   null
  };

  template() {
    return `
    <input-number></input-number>
    <input-text></input-text>
    <button-blue>SEARCH</button-blue>
    `;
  }

  setEvent() {
    this.querySelector('button-blue').addEventListener('@click', () => {
      this.dispatchEvent(new CustomEvent('@apply', {detail: this.add}));
    });

    this.querySelector('input-number').addEventListener('@change', (event) => {
      this.add.number = event.detail;
    });

    this.querySelector('input-text').addEventListener('@change', (event) => {
      this.add.text = event.detail;
    });
  }
}

customElements.define('album-search', AlbumSearch);
