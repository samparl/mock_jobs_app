const React = require('react'),
      ResultConstants = require('../constants/result_constants'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      Store = require('flux/utils').Store,
      ResultStore = new Store(AppDispatcher);

let _results = {
  jobs: [],
  page: [],
  pageCount: []
};

const clearResults = function() {
  _results = [];
  ResultStore.__emitChange();
};

const setResults = function(response) {
  _results.jobs = response.results;
  _results.page = [response.page];
  _results.pageCount = [response.page_count];
  ResultStore.__emitChange();
};

ResultStore.getResults = function(type) {
  return _results[type].slice();
};

ResultStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ResultConstants.RESULTS_RECEIVED:
      setResults(payload.results);
      break;
    default:

  }
};

module.exports = ResultStore;
