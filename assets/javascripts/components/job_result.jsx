import React from 'react';
import Util from '../util/util';

module.exports = React.createClass({
  getInitialState() {
    return({
      active: false
    });
  },

  _handleClick() {
    this.setState({
      active: !this.state.active
    });
  },

  _stopPropagation(e) {
    e.stopPropagation();
  },

  render() {
    let active = this.state.active ? " active" : "";
    let job = this.props.job;

    let addDescription = function() {
      return {__html: job.contents};
    };

    return(
      <div className="result" onClick={ this._handleClick }>
        <div>{ job.name }</div>
        <div>Company: { job.company.name }</div>
        <div>Posted: { Util.formatDate(job.publication_date) }</div>
        <div className={"details" + active} onClick={ this.stopPropagation }>
          Description: <div dangerouslySetInnerHTML={ addDescription() }></div>
          <ul className="detail-list">
            Locations: { Util.getValues(job.locations, "name") }
          </ul>
          <ul className="detail-list">
            Job Levels: { Util.getValues(job.levels, "name") }
          </ul>
          <ul className="detail-list">
            Tags: { Util.getValues(job.tags, "name") }
          </ul>
          <a className="apply-link" href={ job.refs.landing_page }>Apply here</a>
        </div>
      </div>
    );
  }
});
