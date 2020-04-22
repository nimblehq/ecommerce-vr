'use strict';

import { dispatchEventFromElement } from '../../helpers/event';

import OptionDropdown from "../../comments/OptionDropdown";
import FormVarient, { DEFAULT_SELECTOR as FORM_VARIENT_DEFAULT_SELECTOR } from '../../components/FormVarient';
import VectaryElement, { DEFAULT_SELECTOR as VECTARY_ELEMENT_DEFAULT_SELECTOR } from '../../components/VectaryElement';

import * as formVarientEvent from '../../components/FormVarient/events';
import * as vectaryElementEvent from '../../components/VectaryElement/events';

const SELECTOR = {
  screen: 'body.home.index',
  optionDropdown: '.option-dropdown select'
};

class HomeScreen {
  /**
   * Initializer.
   */
  constructor() {
    this.vectaryElement = document.querySelector(VECTARY_ELEMENT_DEFAULT_SELECTOR);
    this.formVarientElement = document.querySelector(FORM_VARIENT_DEFAULT_SELECTOR);

    this._bind();
    this._setup();
    this._addEventListeners();
  }

  onMetalnessChage(event) {
    dispatchEventFromElement(this.vectaryElement, vectaryElementEvent.VECTARY_METALNESS_CHANGE, event.detail);
  }

  onColorChange(event) {
    dispatchEventFromElement(this.vectaryElement, vectaryElementEvent.VECTARY_COLOR_CHANGE, event.detail);
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
    new FormVarient(this.formVarientElement);
  }

  _bind() {
    this.onMetalnessChage = this.onMetalnessChage.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  _addEventListeners() {
    this.formVarientElement.addEventListener(formVarientEvent.FORM_VARIENT_METALNESS_CHANGE, this.onMetalnessChage);
    this.formVarientElement.addEventListener(formVarientEvent.FORM_VARIENT_COLOR_CHANGE, this.onColorChange);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const isHome = document.querySelector(SELECTOR.screen);

  if (isHome) {
    new HomeScreen();
  }
});
