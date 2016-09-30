import React from 'react';
import Header from './header.jsx';
import PageIndex from './page_index';
import JobsIndex from './jobs_index';

module.exports = React.createClass({
  render() {
    return <div className="results-page">
      <Header />
      <JobsIndex />
    </div>;
  }
});
