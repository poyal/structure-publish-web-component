export class Component extends HTMLElement {
  static observedAttributes;
  props = {};
  slot;

  constructor() {
    super();
    this.getSlot();
    this.mounted();
  }

  mounted() {
  }

  destroy() {
  }

  getSlot() {
    this.slot = this.innerHTML;
  }

  connectedCallback() {
    this.innerHTML = this.template();
    this.setEvent();
  }

  disconnectedCallback() {
    this.destroy();
  }

  template() {
    return ``;
  }

  setEvent() {
  }

  propsWatch() {
    return {};
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.props[name] = newValue;

    if (oldValue !== null) {
      const watcher = this.propsWatch();
      if (!!watcher[name]) {
        watcher[name](oldValue, newValue);
      }

      this.connectedCallback();
    }
  }
}
