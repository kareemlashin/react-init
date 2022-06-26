import React, { PureComponent } from "react";
import i18next, { t } from "i18next";

class HeadNav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      lang: localStorage.getItem("lang") || "ar",
    };
  }

  componentWillMount = () => {
    console.log("HeadNav will mount");
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
  componentDidMount = () => {
    this.setState({
      lang: i18next.language,
    });
    i18next.on("languageChanged", (lang) => {
      console.log("languageChanged : languageChanged: ", lang);
      if (lang === "ar") {
        this.setState({
          lang,
        });
      } else {
        this.setState({
          lang,
        });
      }
    });
  };

  componentWillReceiveProps = (nextProps) => {};

  componentWillUpdate = (nextProps, nextState) => {};

  componentDidUpdate = () => {};

  componentWillUnmount = () => {
    console.log("HeadNav will unmount");
  };
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
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="head__nav--wrapper">
        {this.state.lang}
        <div className="container">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            aria-checked="true"
            className="toggle-checkbox"
            defaultChecked={localStorage.getItem("isDark")}
            onChange={($event) => {
              this.lightDark($event);
            }}
          />
          <label
            htmlFor="dark-mode-toggle"
            aria-label="Toggle para modo nocturno"
            className="toggle"
          ></label>
        </div>
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
      </div>
    );
  }
}

export default HeadNav;
