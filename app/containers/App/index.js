import React, { Component } from 'react';
import { compose } from 'redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavigationBar from 'containers/NavigationBar';
import Footer from 'containers/Footer';
import NotFound from 'containers/NotFound';

import injectSaga from 'utils/injectSaga';

import saga from './redux/saga';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Helmet titleTemplate="%s - KangarooMD" defaultTitle="KangarooMD">
          <meta name="description" content="KangarooMD is an intelligent healthcare consumer shopping engine. It empowers millions of patients to search, compare doctors and book appointments online based on prices, care quality, and convenience. Check transparent care prices, read patient reviews, and get questions answered about orthopedic surgery and treatment options for your joints such as back, knee, hip, and shoulder. See what other patients have to say about their care journey and results. Easily find a trusted top doctor for your care needs and book appointments instantly, and more – all at KangarooMD." />
          <meta name="keywords" content="orthopedic surgeons, orthopedic surgery, book appointments, healthcare consumer shopping engine" />
          <meta property="og:site_name" content="KangarooMD" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://www.kangaroomd.com" />
          <meta property="og:title" content="KangarooMD" />
          <meta property="og:description" content="KangarooMD is an intelligent healthcare consumer shopping engine. It empowers millions of patients to search, compare doctors and book appointments online based on prices, care quality, and convenience. Check transparent care prices, read patient reviews, and get questions answered about orthopedic surgery and treatment options for your joints such as back, knee, hip, and shoulder. See what other patients have to say about their care journey and results. Easily find a trusted top doctor for your care needs and book appointments instantly, and more – all at KangarooMD." />
          <meta property="og:image" content="/logo-1200x630.png" />
        </Helmet>
        <header id="page-header">
          <NavigationBar />
        </header>
        <div id="page-content">
          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withSaga,
  withRouter,
)(App);
