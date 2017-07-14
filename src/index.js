import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/bulma.css';
import './css/font-awesome.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
                  <Router history={history}>
                    <App>
                    <Switch>
                      <Route exact path='/' component={ArticleList} />
                      <Route path='/article/1' component={ArticlePage} />
                    </Switch>
                    </App>
                  </Router>
                </Provider>, document.getElementById('app'));
