'use strict';

import OptionDropdown from "../../comments/OptionDropdown";

const SELECTORS = {
  screen: 'body.home.index',
  optionDropdown: '.option-dropdown select'
};

class HomeScreen {
  constructor() {
    this._setup();
  }

  // Private

  _setup() {
    document.querySelectorAll(SELECTORS.optionDropdown).forEach(optionDropdown => {
      new OptionDropdown(optionDropdown);
    });
  }
}

let isHomeScreen = document.querySelector(SELECTORS.screen) !== null;

if (isHomeScreen) {
  new HomeScreen();
}
