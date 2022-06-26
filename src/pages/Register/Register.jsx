import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Register.styles';

class Register extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Register will mount');
  }

  componentDidMount = () => {
    console.log('Register mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Register will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Register will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Register did update');
  }

  componentWillUnmount = () => {
    console.log('Register will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="RegisterWrapper">
        Test content
      </div>
    );
  }
}

Register.propTypes = {
  // bla: PropTypes.string,
};

Register.defaultProps = {
  // bla: 'test',
};

export default Register;
