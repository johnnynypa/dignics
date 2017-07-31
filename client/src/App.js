// eslint-disable-next-line
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import IndexPage from './components/pages/';

const App = (
  <BrowserRouter>
    <Route path="/" component={IndexPage} />
  </BrowserRouter>
)

export default App;
