import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './About.styles';

class About extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('About will mount');
  }

  componentDidMount = () => {
    console.log('About mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('About will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('About will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('About did update');
  }

  componentWillUnmount = () => {
    console.log('About will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AboutWrapper">
        About About About About
      </div>
    );
  }
}

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};

export default About;
