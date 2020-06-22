import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ShopProvider from '../context/shopContext';
import AuthProvider from '../context/authContext';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import NoMatch from '../pages/NoMatch';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Cart from '../components/Cart';
import Login from './auth/Login';
import Register from './auth/Register';
import ProtectedRoute from './auth/ProtectedRoute';


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <Router>
            <Navbar />
            <Cart />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/product/:id' component={ProductPage}/>
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </StyletronProvider>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;
