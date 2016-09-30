import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

const Util = require('./util/util');
const ApiUtil = require('./util/api_util');
const SearchPage = require('./components/search_page');
const ResultsPage = require('./components/results_page');
const browserHistory = require('react-router').browserHistory;

window.ApiUtil = ApiUtil;
window.Util = Util;

const App = React.createClass({
        render() {
          return <div>{ this.props.children }</div>;
        }
      });

const routes = <Route path="/" content={ App }>
        <IndexRoute component={ SearchPage } />
        <Route path="results" component={ ResultsPage } />
      </Route>,

      router = <Router history={ hashHistory } routes={ routes } />,

      renderContent = () => {
        const root = document.getElementById("content");
        ReactDOM.render(router, root);
      };

document.addEventListener("DOMContentLoaded", renderContent);
