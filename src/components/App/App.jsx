import React from 'react';
import Forum from '../Forum/ForumCategories/ForumCategories';
import Thread from '../Forum/Thread/Thread';
import Post from '../Forum/Post/Post';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
          <Header />
          <br />
          <Route path="/" component={Home} />
          <Route path="/forum" component={Forum} />
          <Route path="/thread" component={Thread} />
          <Route path="/post" component={Post} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;