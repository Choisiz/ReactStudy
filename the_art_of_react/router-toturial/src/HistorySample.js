import React, { Component } from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
    //컴포넌투 나타난후 페이지에 변화생길려고할때마다
    this.unblock = this.props.history.block("떠날건가요?");
  }
  componentWillUnmount() {
    //언마운트시 질문멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>back</button>
        <button onClick={this.handleGoHome}>home</button>
      </div>
    );
  }
}

export default HistorySample;
