import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Outlet, NavLink} from 'react-router-dom'
//import { Test } from './Admin.styles';

class Admin extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Admin will mount');
  }

  componentDidMount = () => {
    console.log('Admin mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Admin will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Admin will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Admin did update');
  }

  componentWillUnmount = () => {
    console.log('Admin will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AdminWrapper">
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
          to="../Home"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home Home Home
        </NavLink>
        <NavLink
          to="../Home"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="../about"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          about
        </NavLink>
        <NavLink
          to="../Profile"
          
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

Admin.propTypes = {
  // bla: PropTypes.string,
};

Admin.defaultProps = {
  // bla: 'test',
};

export default Admin;
