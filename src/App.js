import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserInfo from "./components/UserInfo/UserInfo";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    error: '',
    photo: '',
    password: '',
    confirmPassword: '',
    isLoggedIn: false
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />``
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {(loggedInUser.email === 'test@test.com' && loggedInUser.isLoggedIn) &&
            <Route path="/admin">
              <Admin />
            </Route>
          }
          <PrivateRoute path="/user">
            <UserInfo />
          </PrivateRoute>
          <PrivateRoute path="/blog/:id">
            <BlogDetails />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
