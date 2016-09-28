const React = require('react'),
      RequestActions = require('../actions/request_actions'),
      RequestStore = require('../stores/request_store'),
      Company = require('./company');

module.exports = React.createClass({
  getInitialState() {
    return({
      company: RequestStore.getCompany(),
      companies: RequestStore.getCompanies()
    });
  },

  componentDidMount() {
    this.inputListener = RequestStore.addListener(this._handleChange);
  },

  componentWillUnmount() {
    RequestStore.removeListener(this.inputListener);
  },

  _handleChange() {
    let value = RequestStore.getCompany();
    let companies = RequestStore.getCompanies();
    this.setState({
      company: value,
      companies: companies
    });
  },

  _handleInput(event) {
    RequestActions.setCompany(event.target.value);
  },

  render() {
    let value, companies;
    value = this.state.company;
    companies = this.state.companies;
    companies = companies.map(function(company, idx) {
      return <Company name={ company } idx={ idx } />;
    });

    return(
      <div>
        <div>
          <div>company: </div>search by company
        </div>
        <form>
          <ul>
            { companies }
          </ul>
          <input type='text' onChange={ this._handleInput } value={ value } />
        </form>
      </div>
    );
  }
});
