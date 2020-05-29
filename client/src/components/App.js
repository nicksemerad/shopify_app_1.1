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
import Cart from '../components/Cart';


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
              <Route exact path='/product/:id' component={ProductPage}/>
              <Route exact path='/' component={HomePage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </StyletronProvider>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;
