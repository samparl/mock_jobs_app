import React from 'react';
import JobActions from '../actions/job_actions';
import RequestStore from '../stores/request_store';
import { hashHistory } from 'react-router';

module.exports = React.createClass({
  _handleClick() {
    let options = RequestStore.getRequest();
    options.page = [0];
    JobActions.fetchJobs(options);
    hashHistory.push('/results');
  },

  render() {
    return(
      <button
        className="search-button"
        onClick={ this._handleClick }>Find jobs</button>);
  }
});
