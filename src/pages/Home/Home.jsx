import React, { Fragment, PureComponent } from "react";
// import { Button, Checkbox, Form, Input } from "antd";
// import Users from "../../components/Users/Users";
import { Badge, Empty, Divider, Rate } from "antd";
import { Segmented } from "antd";
import { DatePicker, Space } from "antd";
import ar_EG from 'antd/lib/locale/ar_EG';
import en_US from 'antd/lib/locale/en_US';
import { t } from "i18next";
const { RangePicker } = DatePicker;
const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];
class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("Home will mount");
  };

  componentDidMount = () => {
    console.log("Home mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Home will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Home will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Home did update");
  };

  componentWillUnmount = () => {
    console.log("Home will unmount");
  };
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Fragment className="home__wrapper">
        <Divider orientation="left">Presets</Divider>
        <Badge count={25} />
        <Badge
          className="site-badge-count-109"
          style={{ backgroundColor: "#52c41a" }}
        />
        <>
        <DatePicker showTime  />
    <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="YYYY-MM-DD HH:mm"
  
    />
          <RangePicker  />
          <RangePicker showTime  />
          <RangePicker picker="week"/>
          <RangePicker picker="month" />
          <RangePicker picker="quarter"  />
          <RangePicker picker="year" />
        </>

        <>
          <Rate allowHalf defaultValue={2.5} />
        </>
        <Divider orientation="right">Custom</Divider>
        <div>
          <Segmented
            size="large"
            options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
          />
          <br />
          <Segmented
            options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
          />
          <br />
          <Segmented
            size="small"
            options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
          />
        </div>
        <div>
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 60,
            }}
            description={
              <span>
                Customize <a href="#API">Description</a>
              </span>
            }
          ></Empty>
        </div>
        {/* 
        <Users>
          <div>
            <div>ddd</div>
          </div>
        </Users> */}
      </Fragment>
    );
  }
}

export default Home;
