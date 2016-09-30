import React from 'react';
import ResultStore from '../stores/result_store';
import Job from './job_result';
import PageIndex from './page_index';


module.exports = React.createClass({
  getInitialState() {
    return({
      page: ResultStore.getResults("page")[0],
      pageCount: ResultStore.getResults("pageCount")[0],
      results: ResultStore.getResults("jobs")
    });
  },

  componentDidMount() {
    this.resultsListener = ResultStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.resultsListener.remove();
  },

  _onChange() {
    this.setState({
      results: ResultStore.getResults("jobs"),
      page: ResultStore.getResults("page")[0],
      pageCount: ResultStore.getResults("pageCount")[0]
    });
  },

  render() {
    let results, jobs, index;
    results = this.state.results;

    jobs = results.map(function(job, idx) {
      return <Job job={ job } key={ idx } />;
    });
    
    return(
      <ul className="results-index">
        <PageIndex page={this.state.page} count={this.state.pageCount} />
        { jobs }
      </ul>
    );
  }
});
