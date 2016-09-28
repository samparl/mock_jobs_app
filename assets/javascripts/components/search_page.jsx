import React from 'react';
import CompanyInput from './company_input.jsx';
import CategoryInput from './category_input.jsx';
import RequestStore from '../stores/request_store';

module.exports = React.createClass({
  render() {
    return(
      <div>
        <div id='welcome'>Welcome to the Muse!</div>
        <CompanyInput />
        <CategoryInput />
      </div>
    );
  }
});
