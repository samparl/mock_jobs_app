import React from 'react';
const RequestActions = require('../actions/request_actions');

module.exports = React.createClass({
  _handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    RequestActions.removeParameter(this.props.parameter, this.props.name);
  },

  render(){
    return(
      <div key={ this.props.idx } className={"text-parameter element"}>
        <div>{ this.props.name }</div>
        <button onClick={this._handleClick}>x</button>
      </div>
    );
  }
});
