import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx'
import AllCardsList from './AllCardsList.jsx'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="list" component={AllCardsList} />
    </Router>
        );