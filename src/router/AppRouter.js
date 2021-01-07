import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import UploadForm from '../components/UploadForm';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={UploadForm} path="/upload" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
