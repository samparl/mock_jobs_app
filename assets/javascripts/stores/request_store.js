const React = require('react'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      RequestConstants = require('../constants/request_constants'),
      Store = require('flux/utils').Store,
      RequestStore = new Store(AppDispatcher);

let _request = {
  page: [0],
  company: [],
  location: [],
  category: [],
  level: []
};

const addParameter = function(parameter, value) {
  let requestedValues = _request[parameter];
  if(requestedValues.indexOf(value) < 0) requestedValues.push(value);
  _request[parameter] = requestedValues;
  RequestStore.__emitChange();
};

const removeParameter = function(parameter, value) {
  let requestedValues = _request[parameter];
  let index = requestedValues.indexOf(value);
  if(index >= 0) requestedValues.splice(index, 1);
  RequestStore.__emitChange();
};

RequestStore.getValues = function(parameter) {
  return _request[parameter].slice();
};

RequestStore.getRequest = function(parameter) {
  return Object.assign({}, _request);
};

RequestStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case RequestConstants.ADD_COMPANY:
      addCompany(payload.company);
      break;
    case RequestConstants.REMOVE_COMPANY:
      removeCompany(payload.company);
      break;
    case RequestConstants.ADD_PARAMETER:
      addParameter(payload.parameter, payload.value);
      break;
    case RequestConstants.REMOVE_PARAMETER:
      removeParameter(payload.parameter, payload.value);
      break;
    default:

  }
};

module.exports = RequestStore;
