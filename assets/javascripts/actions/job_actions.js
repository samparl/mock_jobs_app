const Constants = require('../constants/job_constants'),
      ApiUtil = require('../util/api_util'),
      AppDispatcher = require('../dispatcher/dispatcher');

const JobActions = {
  fetchJobs(options) {
    ApiUtil.fetchJobs(options, JobActions.receiveJobs);
  },

  receiveJobs(response) {
    console.log(response);
    AppDispatcher.dispatch({
      actionType: Constants.JOBS_RECEIVED,
      payload: response
    });
  }
};

module.exports = JobActions;
