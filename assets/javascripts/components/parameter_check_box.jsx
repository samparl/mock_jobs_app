import React from 'react';
const RequestActions = require('../actions/request_actions');

module.exports = React.createClass({

  _handleClick(e) {
    e.stopPropagation();
    if(this.props.active) {
      RequestActions.removeParameter(this.props.parameter, this.props.name);
    } else {
      RequestActions.addParameter(this.props.parameter, this.props.name);
    }
  },

  render(){
    return(
      <div className="checkbox-parameter field">
        <input
          type="checkbox"
          checked={ this.props.active }
          onChange={this._handleClick}
        />
        <div>{ this.props.name }</div>
      </div>
    );
  }
});
