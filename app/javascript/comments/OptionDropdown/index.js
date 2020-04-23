import Choices from 'choices.js';

// Default configs for Choices
const CONFIG = {
  searchEnabled: false,
  shouldSort: false
};

const DEFAULT_OPTIONS = {
  config: CONFIG
};

class OptionDropdown {
  constructor(element) {
    this.element = element;
    this.config = DEFAULT_OPTIONS.config;

    this._setup();
  }

  // Private

  _setup() {
    this._setupChoices();
  }

  _setupChoices() {
    new Choices(this.element, this.config);
  }

}

export default OptionDropdown;
