import React from 'react';
import JobActions from '../actions/job_actions';
import RequestStore from '../stores/request_store';

module.exports = React.createClass({
  _handleClick() {
    let options = RequestStore.getRequest();
    options.page = [0];
    JobActions.fetchJobs(options);
  },

  render() {
    return(
      <button
        className="search-button"
        onClick={ this._handleClick }>Find jobs</button>);
  }
});
