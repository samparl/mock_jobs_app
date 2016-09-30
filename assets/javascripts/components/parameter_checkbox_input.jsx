const React = require('react'),
      RequestStore = require('../stores/request_store'),
      RequestActions = require('../actions/request_actions'),
      ParameterCheckbox = require('./parameter_check_box');

module.exports = React.createClass({
  getInitialState() {
    return({
      selectedValues: RequestStore.getValues(this.props.parameter)
    });
  },

  componentDidMount() {
    this.requestListener = RequestStore.addListener(this._requestChange);
  },

  componentWillUnmount() {
    this.requestListener.remove();
  },

  _requestChange() {
    let selectedValues = RequestStore.getValues(this.props.parameter);
    this.setState({
      selectedValues: selectedValues
    });
  },

  _handleClick(value, e) {
    e.preventDefault();
    e.stopPropagation();
    if(this.props.active) {
      RequestActions.removeParameter(this.props.parameter, value);
    } else {
      RequestActions.addParameter(this.props.parameter, value);
    }
  },

  render() {
    let parameterValues = this.props.values;
    parameterValues = parameterValues.map(function(value, idx) {
      let selectedValues = this.state.selectedValues;
      let active = selectedValues.indexOf(value) >= 0;
      return (
        <ParameterCheckbox
          key={idx}
          active={ active }
          parameter={ this.props.parameter }
          name={ value }
          idx={ idx }
        />
      );
    }.bind(this));

    return(
      <div className="section">
        <div className="input-description">
          <div className="parameter">{ this.props.parameter}</div>:&nbsp;pick relevant { this.props.description }
        </div>
        <ul className="input-list checkbox-parameter">
          {
            parameterValues
          }
        </ul>
      </div>
    );
  }
});
