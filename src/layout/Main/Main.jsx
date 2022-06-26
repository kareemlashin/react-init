import React, { PureComponent } from "react";
import i18next, { t } from "i18next";
import { withTranslation } from "react-i18next";
import { ConfigProvider } from "antd";

import "./index.scss";
import RouteMain from "../../components/Route/Route";


class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      lang: localStorage.getItem("lang") || "ar",
      dir: localStorage.getItem("lang") === "ar" ? "rtl" : "ltr",
    };
  }

  componentWillMount = () => {};

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
    i18next.on("languageChanged", (lang) => {
      console.log("languageChanged : languageChanged: ", lang);
      if (lang === "ar") {
        this.setState({
          ...this.state,
          dir: "rtl",
        });
      } else {
        this.setState({
          ...this.state,
          dir: "ltr",
        });
      }
    });

  };

  componentWillReceiveProps = (nextProps) => {};

  componentWillUpdate = (nextProps, nextState) => {};

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};
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
        <ConfigProvider direction={i18next.language === "ar" ? "rtl" : "ltr"}>
      
          {t("w_name")}
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
          <RouteMain />
        </ConfigProvider>
      </div>
    );
  }
}
export default withTranslation()(Main);
