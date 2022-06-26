import React, { PureComponent } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
const About = React.lazy(() => import("../../pages/About/About"));
const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
const User = React.lazy(() => import("../../layout/User/User"));

const Home = React.lazy(() => import("../../pages/Home/Home"));
const Admin = React.lazy(() => import("../../layout/Admin/Admin"));
let token = localStorage.getItem("token");

class RouteMain extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {};

  componentDidMount = () => {
    window.addEventListener("storage", () => {
      token = localStorage.getItem("token");
      this.setState({
        hasError: true,
      });
      setTimeout(() => {
        // code
        this.setState({
          hasError: false,
        });
      }, 1);
    });
  };

  componentWillReceiveProps = (nextProps) => {};

  componentWillUpdate = (nextProps, nextState) => {};

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="route__wrapper">
        <BrowserRouter>
          <Routes>
            {(() => {
              if (token) {
                return (
                  <>
                    <Route path="/Admin" element={<Admin />}>
                      <Route path="Home" element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="Profile" element={<Profile />} />

                      <Route path="" element={<Navigate replace to="Home" />} />
                    </Route>
                    <Route
                      path="/"
                      element={<Navigate replace to="/Admin" />}
                    />
                    <Route
                      path="*"
                      element={<Navigate replace to="/Admin" />}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <Route path="/Base" element={<User />}>
                      <Route path="Home" element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="Profile" element={<Profile />} />
                      <Route path="" element={<Navigate replace to="Home" />} />
                    </Route>
                    <Route path="/" element={<Navigate replace to="/Base" />} />
                    <Route path="*" element={<Navigate replace to="/Base" />} />
                  </>
                );
              }
            })()}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouteMain;
