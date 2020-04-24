'use strict';

import { dispatchEventFromElement } from '../../helpers/event';

import OptionDropdown from "../../comments/OptionDropdown";
import VectaryElement, { DEFAULT_SELECTOR as VECTARY_ELEMENT_DEFAULT_SELECTOR } from '../../components/VectaryElement';

import * as vectaryElementEvent from '../../components/VectaryElement/events';

const SELECTORS = {
  screen: 'body.home.index',
  optionDropdown: '.option-dropdown select',
  metalnessSelector: 'select.metalness-selector',
  colorSelector: 'select.color-selector',
};

class HomeScreen {
  /**
   * Initializer.
   */
  constructor() {
    this.vectaryElement = document.querySelector(VECTARY_ELEMENT_DEFAULT_SELECTOR);
    this.metalnessSelector = document.querySelector(SELECTORS.metalnessSelector);
    this.colorSelector = document.querySelector(SELECTORS.colorSelector);

    this._bind();
    this._setup();
    this._addEventListeners();
  }

  onMetalnessChange(event) {
    dispatchEventFromElement(this.vectaryElement, vectaryElementEvent.VECTARY_METALNESS_CHANGE, { metalness: event.target.value });
  }

  onColorChange(event) {
    dispatchEventFromElement(this.vectaryElement, vectaryElementEvent.VECTARY_COLOR_CHANGE, { color: event.target.value });
  }

  // Private

  /**
   * Component setup.
   */
  _setup() {
    document.querySelectorAll(SELECTORS.optionDropdown).forEach(optionDropdown => {
      new OptionDropdown(optionDropdown);
    });
    new VectaryElement(this.vectaryElement);
  }

  _bind() {
    this.onMetalnessChange = this.onMetalnessChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  _addEventListeners() {
    this.metalnessSelector.addEventListener('change', this.onMetalnessChange);
    this.colorSelector.addEventListener('change', this.onColorChange);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const isHome = document.querySelector(SELECTORS.screen);

  if (isHome) {
    new HomeScreen();
  }
});
