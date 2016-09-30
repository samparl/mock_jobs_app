import React from 'react';
import Header from './header.jsx';
import ParameterTextInput from './parameter_text_input.jsx';
import ParameterCheckboxInput from './parameter_checkbox_input.jsx';
import SearchButton from './search_button.jsx';
import RequestStore from '../stores/request_store';
import Categories from '../constants/job_categories';
import JobLevels from '../constants/job_levels';
import JobsIndex from './jobs_index';

module.exports = React.createClass({
  render() {
    return(
      <div className="search-page">
        <Header />
        <ParameterTextInput
          parameter="company" />
        <ParameterTextInput
          parameter="location" />
        <ParameterCheckboxInput
          parameter="level"
          values={ JobLevels }
          description="job levels" />
        <ParameterCheckboxInput
          parameter="category"
          values={ Categories }
          description="job categories" />
        <SearchButton />
      </div>
    );
  }
});
