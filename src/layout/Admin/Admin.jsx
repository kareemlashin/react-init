import React, { PureComponent } from "react";
import { Outlet, NavLink } from "react-router-dom";
//import { Test } from './Admin.styles';
import "./admin.scss";
import HeadNav from "./components/HeadNav/HeadNav";
class Admin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      openClose: "open",
    };
  }

  componentWillMount = () => {};

  componentDidMount = () => {};

  componentWillReceiveProps = (nextProps) => {};

  componentWillUpdate = (nextProps, nextState) => {};

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};
  openClose() {
    if (this.state.openClose === "open") {
      this.setState({
        ...this.state,
        openClose: "close",
      });
    } else {
      this.setState({
        ...this.state,
        openClose: "open",
      });
    }
  }
  render() {
    
    return (
      <div className="AdminWrapper">
        <div className="admin-container position-relative">
          <aside
            className={`side-nav ${
              this.state.openClose === "open" ? "open" : "close"
            }`}
          >
            <div>
              <button
                className="close__mobile"
                onClick={() => {
                  this.openClose();
                }}
              >
                close
              </button>
              <NavLink
                to="/"
                className={(isActive) =>
                  "nav-link " +
                  (isActive.isActive ? " unselected" : " selected")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="Home"
                className={(isActive) =>
                  "nav-link " +
                  (isActive.isActive ? " unselected" : " selected")
                }
              >
                Home Home Home
              </NavLink>
              <NavLink
                to="sHome"
                className={(isActive) =>
                  "nav-link " +
                  (isActive.isActive ? " unselected" : " selected")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className={(isActive) =>
                  "nav-link " +
                  (isActive.isActive ? " unselected" : " selected")
                }
              >
                about
              </NavLink>
              <NavLink
                to="Profile"
                className={(isActive) =>
                  "nav-link " +
                  (isActive.isActive ? " unselected" : " selected")
                }
              >
                Profile
              </NavLink>
            </div>
          </aside>
          <div
            className={`main-admin ${
              this.state.openClose === "open" ? "open" : "close"
            }`}
          >
            <div className="d-flex">
              <button
                onClick={() => {
                  this.openClose();
                }}
              >
                openClose
              </button>
              <HeadNav />
            </div>
            <div className="main__content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
