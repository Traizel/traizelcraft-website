import React from 'react';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
          <Header />
          <br />
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
        <Route exact path="/add-event" component={AddEvent} />
          <Route exact path="/news" component={News} />
          <Route path="/forum" component={Forum} />
          <Route path="/thread" component={Thread} />
          <Route path="/post" component={Post} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;