const Constants = require('../constants/request_constants'),
      // ApiUtil = require('../util/api_util'),
      AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  setCompany(value) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMPANY,
      company: value
    });
  }
};
