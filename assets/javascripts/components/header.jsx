import React from 'react';
import { hashHistory } from 'react-router';

module.exports = React.createClass({
  _onClick() {
    hashHistory.push("/");
  },

  render() {
    return(
      <div id='welcome' className="header" onClick={ this._onClick }>
        <div className="title">Welcome to the Muse!</div>
      </div>
    );
  }
});
