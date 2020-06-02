import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../../context/authContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    { value =>
    <Route 
      {...rest}
      render={ props => (
        value.authenticated ?
        <Component { ...rest } />
        :
        <Redirect 
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />
      )}
    
    />
    }
  </AuthConsumer>
)


export default ProtectedRoute;