import React, { useContext } from 'react';
import { Container, Anchor, } from 'atomize';
import { Link, withRouter } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const { openCart } = useContext(ShopContext);
  const { authenticated } = useContext(AuthContext);

  return(
    <Container d='flex' flexDir='row' p='2rem' justify='space-between'>
      <Link to='/'>Shop</Link>
      <Anchor onClick={() => openCart()}>Cart</Anchor>
      <Link to='/login'>Login</Link>
    </Container>
  )
}

export default Navbar;