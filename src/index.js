import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/index.less";
import "./css/index.css";
import ImgFile from "./img";
import ButtonCom from "./components/button/button";
import Icon from "./components/Icon/icon";
import Divider from "./components/Divider/divider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "1234",
    };
  }
  cas = (sd) => {
    console.log(sd);
  };
  handelBtnClick = () => {
    alert("btn click");
  };
  render() {
    return (
      <>
        <div style={{ color: "#f40" }}>{this.state.name}</div>
        <div>
          <h1> button</h1>
          <hr />
          <div id="demo-btn-q">
            <h1> size=""</h1>
            <ButtonCom size="sm" type="text">
              12123
            </ButtonCom>
            <ButtonCom type="text"> 12123 </ButtonCom>
            <ButtonCom size="lg" type="text">
              12123
            </ButtonCom>
          </div>
          <div id="demo-btn-e">
            <h1> type=""</h1>
            <ButtonCom size="lg"> default="primary" </ButtonCom>
            <ButtonCom type="primary" size="lg">
              primary
            </ButtonCom>
            <ButtonCom type="text" size="lg">
              text
            </ButtonCom>
            <ButtonCom type="danger" size="lg">
              danger
            </ButtonCom>
            <ButtonCom type="link" size="lg">
              link
            </ButtonCom>
          </div>
          <div id="demo-btn-d">
            <h1> disabled</h1>
            <ButtonCom size="lg" disabled>
              default="primary"
            </ButtonCom>
            {/* <Icon type="icon" iconName="icon-bussiness-man" /> */}
          </div>
        </div>

        <div>
          <h1>Icon</h1>
          <hr />
          <Icon
            type="icon"
            icon="icon-component"
            style={{ fontSize: "30px", color: "#f40" }}
          />
        </div>

        <div style={{ backgroundColor: "#ddd", paddingBottom: "20px" }}>
          <h1>Divider</h1>
          <hr />
          <Divider />
          <Divider dashed />
          <h1>orientation</h1>
          <Divider> Text </Divider>
          <Divider orientation="center"> Text </Divider>
          <Divider orientation="left"> Text </Divider>
          <Divider orientation="right"> Text </Divider>

          <h1>plain</h1>
          <Divider plain> Text</Divider>
          <Divider orientation="left" plain>
            Text
          </Divider>
          <Divider orientation="right" plain>
            Text
          </Divider>
          <h1>type</h1>
          <div>
            <a href="#">#</a>
            <Divider type="vertical" />
            <a href="#">#</a>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
