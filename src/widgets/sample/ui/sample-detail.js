import {Component} from '/src/shared/core';

class SampleDetail extends Component {
  template() {
    return `
    <h1>Sample Detail</h1>
    
    <div>${this.slot}</div>
    
    <h1>ENV</h1>
    
    <div>
        <label>VITE_ENV</label>
        <p>${import.meta.env.VITE_ENV}</p>
    </div>
    
    <div>
        <label>VITE_SAMPLE</label>
        <p>${import.meta.env.VITE_SAMPLE}</p>
    </div>
    
     <div>
        <label>VITE_SAMPLE_URL</label>
        <p>${import.meta.env.VITE_SAMPLE_URL}</p>
    </div>
    
    <div>
        <h1>recursive-test</h1>
    </div>
    
    <div>
        <recursive-test step="0"></recursive-test>
    </div>
    `;
  }
}

customElements.define('sample-detail', SampleDetail);
