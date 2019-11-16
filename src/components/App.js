import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CoursesPage from './Course/CoursesPage';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import Header from './Header/Header';
import PageNotFound from './PageNotFound/PageNotFound';
import ManageCoursesPage from './Course/ManageCoursePage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/:id' component={ManageCoursesPage} />
        <Route path='/course' component={ManageCoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
