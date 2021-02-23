import React, { useEffect } from 'react';
import Forum from '../Forum/ForumCategories/ForumCategories';
import Thread from '../Forum/Thread/Thread';
import Post from '../Forum/Post/Post';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import LoginPage from '../LoginForm/LoginForm';
import RegisterPage from '../RegisterForm/RegisterForm';
import Events from '../Events/Events';
import News from '../News/News';
import AddEvent from '../Events/AddEvent';
import AddNews from '../News/AddNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
      <Router>
      <div>
        <Header />
        <br />
        <Switch>
          <Route
            // shows Home at all times (logged in or not)
            exact
            path="/"
          >
            <Home />
          </Route>
          {/* Visiting localhost:3000/ will show the home page. */}
          <Route
            // shows Events at all times (logged in or not)
            exact
            path="/events"
          >
            <Events />
          </Route>

          {/* Visiting localhost:3000/news will show the news page. */}
          <Route
            // shows News at all times (logged in or not)
            exact
            path="/news"
          >
            <News />
          </Route>

          {/* Visiting localhost:3000/forum will show the forum page. */}
          <Route
            // shows Forum at all times (logged in or not)
            exact
            path="/forum"
          >
            <Forum />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/add-event"
          >
            <AddEvent />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/add-article"
          >
            <AddNews />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/"
            // - else shows LandingPage at "/home"
            exact
            path="/"
            authRedirect="/"
          >
            <Home />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
          {/* <Route path="/thread" component={Thread} />
          <Route path="/post" component={Post} /> */}
      <Footer />
      </div>
      </Router>
  );
}

export default App;