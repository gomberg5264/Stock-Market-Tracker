import React, { Component } from "react";

import LightSpeed from "react-reveal/LightSpeed";

import { stock } from "../../resources/stock";

import StockRow from "../stock-row/StockRow";

import "./stock-list.style.css";

class StockList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastTradingDate: null,
    };
  }

  componentDidMount = () => {
    stock.getLastTradingDate().then((data) => {
      this.setState({
        lastTradingDate: data[0].date,
      });
    });
  };

  render() {
    const { lastTradingDate } = this.state;
    return (
      <ul className="list">
        <h1 className="list-title">Company</h1>
        <LightSpeed left>
          <StockRow ticker="grub" lastTradingDate={lastTradingDate} />
          <StockRow ticker="goog" lastTradingDate={lastTradingDate} />
          <StockRow ticker="msft" lastTradingDate={lastTradingDate} />
          <StockRow ticker="tsla" lastTradingDate={lastTradingDate} />
          <StockRow ticker="fb" lastTradingDate={lastTradingDate} />
        </LightSpeed>
      </ul>
    );
  }
}

export default StockList;
