import { dispatchEventFromElement } from '../../helpers/event';

import * as customEvent from './events';

export const DEFAULT_SELECTOR = '.form-varient';

const SELECTORS = {
  metalnessSelector: 'select#metalness',
  colorSelector: 'select#color',
  submitButton: 'input[type="submit"]'
}

class FormVarient {
  /**
   * Initializer.
   */
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.metalnessSelector = this.elementRef.querySelector(SELECTORS.metalnessSelector);
    this.colorSelector = this.elementRef.querySelector(SELECTORS.colorSelector);
    this.submitButton = this.elementRef.querySelector(SELECTORS.submitButton);

    this._bind();
    this._addEventListeners();
  }

  onMetalnessChange(event) {
    dispatchEventFromElement(this.elementRef, customEvent.FORM_VARIENT_METALNESS_CHANGE, { metalness: event.target.value })
  }

  onColorChange(event) {
    dispatchEventFromElement(this.elementRef, customEvent.FORM_VARIENT_COLOR_CHANGE, { color: event.target.value })
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

export default FormVarient;
