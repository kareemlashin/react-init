import React, { PureComponent } from 'react';
import {NavLink, Link} from 'react-router-dom'
//import { Test } from './Users.styles';

class Users extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Users will mount');
  }

  componentDidMount = () => {
  }

  componentWillReceiveProps = (nextProps) => {
  }

  componentWillUpdate = (nextProps, nextState) => {
  }

  componentDidUpdate = () => {
  }

  componentWillUnmount = () => {
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UsersWrapper">
        Test content                 {this.props.children}

      </div>
    );
  }
}


export default Users;
