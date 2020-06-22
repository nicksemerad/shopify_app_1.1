import React, { useContext } from 'react';
import { Container, Anchor, } from 'atomize';
import { Link, withRouter } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const { openCart } = useContext(ShopContext);
  const { auth, user, handleLogout } = useContext(AuthContext);

  return(
    <div style={{marginLeft: '10rem', marginRight: '10rem'}}>
      <Container d='flex' flexDir='row' p='1rem' justify='space-between' margin='.5rem'>
        <Link to='/'>Shop</Link>
        <Anchor onClick={() => openCart()}>Cart</Anchor>
        <Link to='/login'>Login</Link>
      </Container>
    </div>
  )
}

export default Navbar;