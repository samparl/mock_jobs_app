const React = require('react'),
      InputActions = require('../actions/input_actions'),
      RequestActions = require('../actions/request_actions'),
      RequestStore = require('../stores/request_store'),
      InputStore = require('../stores/input_store'),
      ParameterTextBox = require('./parameter_text_box');

module.exports = React.createClass({
  getInitialState() {
    return({
      inputValue: InputStore.getValue(this.props.parameter),
      requestParameters: RequestStore.getValues(this.props.parameter)
    });
  },

  componentDidMount() {
    this.tag = `#${ this.props.parameter }-input-field`;
    this.inputListener = InputStore.addListener(this._inputChange);
    this.requestListener = RequestStore.addListener(this._requestChange);
    $(this.tag).on("focus", function() {
      $(this).parent().parent().addClass("active");
    });

    $(this.tag).on("blur", function() {
      $(this).parent().parent().removeClass("active");
    });
  },

  componentWillUnmount() {
    this.requestListener.remove();
    this.inputListener.remove();
    $(this.tag).off();
  },

  _inputChange() {
    let value = InputStore.getValue(this.props.parameter);
    this.setState({
      inputValue: value
    });
  },

  _requestChange() {
    let requestParameters = RequestStore.getValues(this.props.parameter);
    this.setState({
      requestParameters: requestParameters
    });
  },

  _handleInput(event) {
    InputActions.setValue(this.props.parameter, event.target.value);
  },

  _handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    RequestActions.addParameter(this.props.parameter, this.state.inputValue);
    InputActions.clearInput(this.props.parameter);
  },

  render() {
    let value, requestParameters, parameter;
    value = this.state.inputValue;
    parameter = this.props.parameter;
    requestParameters = this.state.requestParameters;
    requestParameters = requestParameters.map(function(value, idx) {
      return (
        <ParameterTextBox
          name={ value }
          key={ idx }
          parameter={ parameter }
        />
      );
    }.bind(this));

    return(
      <div className="section">
        <div className="vertical">
          <div className="input-description">
            <div className="parameter">{ parameter }</div>:&nbsp;search by { parameter }
          </div>
          <div className="text-parameter field">
            <ul className="input-list text-parameter">
              { requestParameters }
            </ul>
            <form onSubmit={ this._handleSubmit }>
              <input
                type='text'
                id={ parameter + "-input-field" }
                onChange={ this._handleInput }
                value={ value }
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
});
