import React from 'react';
import Util from '../util/util';
import RequestStore from '../stores/request_store';
import JobActions from '../actions/job_actions';

module.exports = React.createClass({
  _clickHandler(pageNumber, e) {
    let options = RequestStore.getRequest();
    options.page = [pageNumber];
    JobActions.fetchJobs(options);
  },

  render() {
    let pages, selected, callback;

    pages = Util.getPageNumbers(this.props.page, this.props.count);
    pages = pages.map(function(pageNumber, idx) {

      if(pageNumber === this.props.page){
        selected = " selected";
        callback = null;
      } else {
        callback = this._clickHandler.bind(this, pageNumber);
        selected = "";
      }

      return (
        <div key={ idx }
          className={ "page-number" + selected }
          onClick={ callback }>
          { pageNumber + 1 }
        </div>
      );
    }.bind(this));

    return(
      <ul className="page-index">
        { pages }
      </ul>
    );
  }
});
