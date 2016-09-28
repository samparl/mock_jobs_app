import React from 'react';

module.exports = React.createClass({
  _handleClick(e) {
    e.preventDefault();

  },

  render(){
    return(
      <div key={ this.props.idx }>
        { this.props.name }<button onClick={this._handleClick}>x</button>
      </div>
    );
  }
});
