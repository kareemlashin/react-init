import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Outlet, NavLink, Navigate, Route, } from 'react-router-dom'
import i18next from 'i18next';
//import { Test } from './User.styles';
import { useNavigate } from "react-router-dom";

class User extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      lang: localStorage.getItem("lang") || "ar",

    };
  }

  componentWillMount = () => {
    console.log('User will mount');
  }

  componentDidMount = () => {
    if (localStorage.getItem("isDark")) {
      document.getElementsByTagName("body")[0]?.classList?.add("bg-dark");
    }
    if (localStorage.getItem("lang") === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
      this.setState({
        ...this.state,
        dir: "rtl",
      });
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
      this.setState({
        ...this.state,
        dir: "ltr",
      });
    }
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
  changeLanguageHandler = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    if (localStorage.getItem("lang") === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
    }
  };
  token=()=>{
    localStorage.setItem('token','setItem');
    window.dispatchEvent(new Event("storage"));

   return  <Navigate to="/" replace={true} />

  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UserWrapper">
        Test content
        <button onClick={()=>{
          this.token()
        }}>
        token
        </button>
        {(() => {
          if (this.state.lang === "ar") {
            return (
              <button onClick={() => this.changeLanguageHandler("en")}>
                en
              </button>
            );
          } else {
            return (
              <button onClick={() => this.changeLanguageHandler("ar")}>
                ar
              </button>
            );
          }
        })()}
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
