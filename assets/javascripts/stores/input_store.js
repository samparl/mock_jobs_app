const React = require('react'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      InputConstants = require('../constants/input_constants'),
      Store = require('flux/utils').Store,
      InputStore = new Store(AppDispatcher);

let _inputs;

_inputs = {
  company: "",
  location: ""
};

const setValue = function(input, value) {
  _inputs[input] = value;
  InputStore.__emitChange();
};

const clearInput = function(input) {
  _inputs[input] = "";
  InputStore.__emitChange();
};

InputStore.getValue = function(input) {
  return _inputs[input].slice();
};

InputStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case InputConstants.SET_VALUE:
      setValue(payload.input, payload.value);
      break;
    case InputConstants.CLEAR_VALUE:
      clearInput(payload.input);
      break;
    default:
  }
};

module.exports = InputStore;
