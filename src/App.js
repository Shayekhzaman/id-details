import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import UserDetail from './components/UserDetail/UserDetail';
import Comment from './components/Comment/Comment';




function App() {
 
  return (
   <Router>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/user/:userID">
          <UserDetail></UserDetail>
       </Route>
       <Route path="/comments/:commentsId">
          <Comment/>
       </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>

     </Switch>
   </Router>
  );
}

export default App;
