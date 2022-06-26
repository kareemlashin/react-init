import React, { PureComponent } from "react";
import  i18next, { t } from "i18next";
import {withTranslation} from 'react-i18next'
import i18n from '../../i18n'
import axios from 'axios'

class NavbarPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      lang:localStorage.getItem('lang')||'ar'
    };
  }

  componentWillMount = () => {
  };

  componentDidMount = () => {
    i18next.on('languageChanged',(lang)=>{
      console.log('languageChanged : languageChanged: ',lang)
      axios
      .get("https://www.postman.com/collections"+lang)
      .then((data) => {});
    })

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
  };
  render() {
    return (
      <div className="navbar__page--wrapper">
        {t("w_name")}<br />
        {i18next.language}<br />
        <button
          onClick={() => this.changeLanguageHandler("en")}
        >
          en
        </button><br />
        <button
          onClick={() => 
            this.changeLanguageHandler("ar")
          }
        >
          ar
        </button>
      </div>
    );
  }
}
export default  withTranslation()(NavbarPage);
