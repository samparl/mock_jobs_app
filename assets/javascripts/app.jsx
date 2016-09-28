import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

const SearchPage = require('./search_page');
const App = React.createClass({
        render() {
          return <div>{ this.props.children }</div>;
        }
      });

const routes = <Route path="/" content={ App }>
        <IndexRoute component={ SearchPage } />
      </Route>,

      router = <Router history={ hashHistory } routes={ routes } />,

      renderContent = () => {
        const root = document.getElementById("content");
        ReactDOM.render(router, root);
      };

document.addEventListener("DOMContentLoaded", renderContent);
