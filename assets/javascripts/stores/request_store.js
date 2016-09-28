const React = require('react'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      RequestConstants = require('../constants/request_constants'),
      Store = require('flux/utils').Store,
      RequestStore = new Store(AppDispatcher);

let _inputs, _request;

_inputs = {
  company: ""
};

_request = {
  companies: ["Apple"]
};

const setCompany = function(value) {
  _inputs.company = value;
  // console.log(_company);
  RequestStore.__emitChange();
};

const addCompany = function(company) {
  let companies = _request.companies;
  if(companies.indexOf(company) < 0) companies.push(company);
  RequestStore.__emitChange();
};

const removeCompany = function(company) {
  let companies = _request.companies;
  let index = companies.indexOf(company);
  if(index >= 0) companies.splice(index, 1);
  RequestStore.__emitChange();
};

RequestStore.getCompany = function() {
  return _inputs.company.slice();
};

RequestStore.getCompanies = function() {
  return _request.companies.slice();
};

RequestStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case RequestConstants.SET_COMPANY:
      // debugger
      setCompany(payload.company);
      break;
    case RequestConstants.ADD_COMPANY:
      addCompany(payload.company);
      break;
    case RequestConstants.REMOVE_COMPANY:
      removeCompany(payload.company);
      break;
    default:

  }
};

module.exports = RequestStore;
