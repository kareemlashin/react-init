import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Login.styles';

class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Login will mount');
  }

  componentDidMount = () => {
    console.log('Login mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Login will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Login will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Login did update');
  }

  componentWillUnmount = () => {
    console.log('Login will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoginWrapper">
        Test content
      </div>
    );
  }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
