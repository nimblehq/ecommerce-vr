import { VctrApi } from 'vendor/vectary-api';

import * as customEvent from './events';

export const DEFAULT_SELECTOR = '.vectary-canvas';

const MAIN_MESH_NAME = 'bollard_2';

class VectaryElement {
  /**
   * Initialize.
   */
  constructor(elementRef) {
    this.elementRef = elementRef;

    this._setup();
    this._bind();
    this._addEventListeners();
  }

  onMetalnessChange(event) {
    this._updateMaterial({ metalness: event.detail.metalness })
  }

  onColorChange(event) {
    this._updateMaterial({ color: event.detail.color })
  }

  // Private

  async _setup() {
    this.vctrApi = new VctrApi('c9d4a16c-e9bb-4a07-b797-cd861d183019', this._errHandler);

    try {
      this.vctrApi.init();
    } catch (e) {
      this._errHandler(e);
    }
  }

  errHandler(err) {
    console.log('API error', err);
  }

  /**
   * Bind all functions to the local instance scope.
   */
  _bind() {
    this.onMetalnessChange = this.onMetalnessChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  /**
   * Adds all the required event listeners.
   */
  _addEventListeners() {
    this.elementRef.addEventListener(customEvent.VECTARY_METALNESS_CHANGE, this.onMetalnessChange);
    this.elementRef.addEventListener(customEvent.VECTARY_COLOR_CHANGE, this.onColorChange);
  }

  async _updateMaterial(params) {
    try {
      const mainMesh = await this.vctrApi.getMeshByName(MAIN_MESH_NAME);
      const updateMaterialSuccess = await this.vctrApi.updateMaterial(mainMesh.material, params);
      console.log(`Material update success: ${updateMaterialSuccess}`);
    } catch (e) {
      console.log('API error', e);
      this._errHandler(e);
    }
  }

  _errHandler(err) {
    console.log("API error", err);
  }
}

export default VectaryElement;
