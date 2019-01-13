import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import BookList from '../components/BookList';
import CreateBook from '../components/CreateBook';
import BookDetail from '../components/BookDetail';
import EditBookPage from '../components/EditBookPage';

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={BookList} exact={true} />
        <Route path="/books/new" component={CreateBook} />
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/edit/:id" component={EditBookPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;