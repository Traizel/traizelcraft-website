import React from 'react';
import Forum from '../Forum/ForumCategories/ForumCategories';
import Thread from '../Forum/Thread/Thread';
import Post from '../Forum/Post/Post';
import Header from '../Header/Header';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div >
      <Router>
        <div>
          <Header />
          <br />
          <Route path="/forum" component={Forum} />
          <Route path="/thread" component={Thread} />
          <Route path="/post" component={Post} />
        </div>
      </Router>
    </div>
  );
}

export default App;