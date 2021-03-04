import React, { useEffect } from 'react';
import Forum from '../Forum/ForumCategories/ForumCategories';
import Thread from '../Forum/Thread/Thread';
import CreateThread from '../Forum/Thread/CreateThread';
import Post from '../Forum/Post/Post';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Events from '../Events/Events';
import News from '../News/News';
import AddEvent from '../Events/AddEvent';
import AddNews from '../News/AddNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedAdminRoute from '../ProtectedRoute/ProtectedAdminRoute';
import ProtectedModRoute from '../ProtectedRoute/ProtectedModRoute';
import ProtectedColabRoute from '../ProtectedRoute/ProtectedColabRoute';
import UserPage from '../UserPage/UserPage';
import SignUp from '../Events/SignUp';
import EventDetails from '../Events/EventDetails';
import './App.css';
import {
  HashRouter as Router,
  Route,
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
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/events"
          >
            <Events />
          </ProtectedRoute>

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

          <Route
            // shows News at all times (logged in or not)
            exact
            path="/thread"
          >
            <Thread />
          </Route>
          
          <Route
            // shows News at all times (logged in or not)
            exact
            path="/create-thread"
          >
            <CreateThread />
          </Route>

          <Route
            // shows News at all times (logged in or not)
            exact
            path="/post"
          >
            <Post />
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

          <ProtectedColabRoute
            // logged in and a colaborator shows add event else shows LoginPage
            exact
            path="/add-event"
          >
            <AddEvent />
          </ProtectedColabRoute>

          <ProtectedAdminRoute
            // logged in shows add article else shows LoginPage
            exact
            path="/add-article"
          >
            <AddNews />
          </ProtectedAdminRoute>

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

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/sign-up"
          >
            <SignUp />
          </ProtectedRoute>

          <ProtectedColabRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/event-details"
          >
            <EventDetails />
          </ProtectedColabRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1 className='four'>404</h1>
          </Route>
        </Switch>
      <Footer />
      </div>
      </Router>
  );
}

export default App;