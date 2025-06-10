import {Component} from '/src/shared/core';

class AlbumDetail extends Component {
  static observedAttributes = ['props1', 'props2', 'long-name-props'];

  mounted() {
    console.log('AlbumDetail mounted');
  }

  template() {
    return `
    <h1>ALBUM DETAIL</h1>
    
    <div>${this.slot}</div>
    
    <div>
        <label>props1</label>
        <p>${this.props['props1']}</p>
    </div>
    
    <div>
        <label>props2</label>
        <p>${this.props['props2']}</p>
    </div>
    
    <div>
        <label>long-name-props</label>
        <p>${this.props['long-name-props']}</p>
    </div>
    `;
  }

  propsWatch() {
    return {
      'props1': (oldValue, newValue) => {
        console.log('props1', oldValue, newValue);
      },

      'props2': this.watchParams,

      'long-name-props': (oldValue, newValue) => {
        console.log('long-name-props', oldValue, newValue);
      }
    };
  }

  watchParams(oldValue, newValue) {
    console.log('props2', oldValue, newValue);
  }
}

customElements.define('album-detail', AlbumDetail);
