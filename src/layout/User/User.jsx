import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Outlet, NavLink} from 'react-router-dom'
//import { Test } from './User.styles';

class User extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('User will mount');
  }

  componentDidMount = () => {
    console.log('User mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('User will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('User will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('User did update');
  }

  componentWillUnmount = () => {
    console.log('User will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UserWrapper">
        Test content
        <div>
        <NavLink
          to="/"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="Home"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home Home Home
        </NavLink>
        <NavLink
          to="Home"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          about
        </NavLink>
        <NavLink
          to="Profile"
          
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Profile
        </NavLink>
        </div>
        <Outlet />

      </div>
    );
  }
}

User.propTypes = {
  // bla: PropTypes.string,
};

User.defaultProps = {
  // bla: 'test',
};

export default User;
