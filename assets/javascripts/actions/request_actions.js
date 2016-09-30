const RequestConstants = require('../constants/request_constants'),
      // ApiUtil = require('../util/api_util'),
      AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  addCompany(company) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.ADD_COMPANY,
      company: company
    });
  },

  removeCompany(company) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REMOVE_COMPANY,
      company: company
    });
  },

  addParameter(parameter, value) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.ADD_PARAMETER,
      parameter: parameter,
      value: value
    });
  },

  removeParameter(parameter, value) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REMOVE_PARAMETER,
      parameter: parameter,
      value: value
    });
  }
};
