import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { AuthConsumer } from '../context/authContext';
import { ShopContext } from '../context/shopContext';

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout } } = this.props
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  render() {
    return(
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

const AuthNavbar = (props) => (
  <AuthConsumer>
    { value =>
      <Navbar {...props } auth={value} />
    }
  </AuthConsumer>
)

const ConnectedNavbar = (props) => (
  <ShopContext>
    { value =>
      <AuthNavbar {...props } auth={value} />
    }
  </ShopContext>
)

export default withRouter(ConnectedNavbar);