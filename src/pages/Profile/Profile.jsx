import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Profile.styles';

class Profile extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Profile will mount');
  }

  componentDidMount = () => {
    console.log('Profile mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Profile will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Profile will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Profile did update');
  }

  componentWillUnmount = () => {
    console.log('Profile will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ProfileWrapper">
        Test content
      </div>
    );
  }
}

Profile.propTypes = {
  // bla: PropTypes.string,
};

Profile.defaultProps = {
  // bla: 'test',
};

export default Profile;
