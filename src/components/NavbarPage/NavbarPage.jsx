import React, { PureComponent } from "react";
import i18next, { t } from "i18next";
import { withTranslation } from "react-i18next";
import axios from "axios";
import "./index.scss";

class NavbarPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      lang: localStorage.getItem("lang") || "ar",
    };
  }

  componentWillMount = () => {};

  componentDidMount = () => {
    if (localStorage.getItem("isDark")) {
      document.getElementsByTagName("body")[0]?.classList?.add("bg-dark");
    }
    if (localStorage.getItem("lang") === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
    }
    i18next.on("languageChanged", (lang) => {
      console.log("languageChanged : languageChanged: ", lang);
      axios
        .get("https://www.postman.com/collections/9e1075da1dc1b06025cc")
        .then((data) => {});
    });

    /* 
   import axios from "axios";
   
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=30.5020677&lon=31.1966129&appid=2569a0988f2d22b6178beaff0f31b911&units=metric"
      )
      .then((data) => {});

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=22.5020677&lon=22.1966129&appid=2569a0988f2d22b6178beaff0f31b911&units=metric"
      )
      .then((data) => {});
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=40.5020677&lon=40.1966129&appid=2569a0988f2d22b6178beaff0f31b911&units=metric"
      )
      .then((data) => {});
      */
  };

  componentWillReceiveProps = (nextProps) => {};

  componentWillUpdate = (nextProps, nextState) => {};

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};
  changeLanguageHandler = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    if (lang === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
    }
  };
  lightDark($event) {
    if (!localStorage.getItem("isDark")) {
      document.getElementsByTagName("body")[0].classList.add("bg-dark");
      localStorage.setItem("isDark", "isDark");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("bg-dark");
      localStorage.removeItem("isDark");
    }
  }
  render() {
    return (
      <div className="navbar__page--wrapper">
        <div>
          <div className="container">
            <input
              type="checkbox"
              id="dark-mode-toggle"
              defaultChecked={localStorage.getItem("isDark")}
              className="toggle-checkbox"
              onChange={($event) =>
                this.lightDark(localStorage.getItem("isDark"))
              }
            />
            <label htmlFor="dark-mode-toggle" className="toggle"></label>
          </div>
        </div>
        {t("w_name")}
        <br />
        {(() => {
          if (i18next.language === "ar") {
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
      </div>
    );
  }
}
export default withTranslation()(NavbarPage);
