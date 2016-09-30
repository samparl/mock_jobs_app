const ResultConstants = require('../constants/result_constants'),
      ApiUtil = require('../util/api_util'),
      AppDispatcher = require('../dispatcher/dispatcher');

const JobActions = {
  fetchJobs(options) {
    ApiUtil.fetchJobs(options, JobActions.receiveResults);
  },

  receiveResults(response) {
    console.log(response);
    AppDispatcher.dispatch({
      actionType: ResultConstants.RESULTS_RECEIVED,
      results: response
    });
  }
};

module.exports = JobActions;
