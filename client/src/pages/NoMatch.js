import React from 'react';
import { Link, } from 'react-router-dom';
import { Div } from 'atomize';

const NoMatch = () => (
  <div style={{textAlign: 'center', margin: '1rem'}}>
    <Div>Page Not Found</Div>
    <Link to="/">Home</Link>
  </div>
)
export default NoMatch;