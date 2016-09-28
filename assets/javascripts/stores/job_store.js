const React = require('react'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      Store = require('flux/utils').Store,
      JobsStore = new Store(AppDispatcher);

let _page = {};

const resetJobs = function(jobs) {
  _page = jobs;
};

JobsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case Constants.JOBS_RECEIVED:
      resetJobs(payload.page);
      break;
    default:

  }
};
