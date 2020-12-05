import React, { Component } from "react";

import { stock } from "../../resources/stock";

import "./stock-row.style.css";

class StockRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: null,
      date: null,
      time: null,
      dollar_change: null,
      percent_change: null,
      data: null,
    };
  }

  changeStyle = () => {
    return {
      color: this.state.dollar_change > 0 ? "green" : "red",
    };
  };

  getData = (data) => {
    // console.log(data);
    // const formattedPrice =
    //   data.price === undefined ? null : data.price.toFixed(2);
    this.setState({
      price: data.price,
      date: data.date,
      time: data.time,
    });
  };

  componentDidMount = () => {
    stock.latestPrice(this.props.ticker, this.getData);
  };

  componentDidUpdate = (prevProps) => {
    this.setCanClose(prevProps);
    if (this.state.canSetClose && this.state.price !== null) {
      stock.getYesterdaysClose(
        this.props.ticker,
        this.props.lastTradingDate,
        (yesterday) => {
          const dollar_change = (this.state.price - yesterday.price).toFixed(2);
          const percent_change = (
            (100 * dollar_change) /
            yesterday.price
          ).toFixed(2);
          this.setState({
            dollar_change: `${dollar_change}`,
            percent_change: `(${percent_change}%)`,
            canSetClose: false,
          });
        }
      );
    }
  };

  setCanClose = (prevProps) => {
    if (
      prevProps.lastTradingDate === null &&
      this.props.lastTradingDate !== null
    ) {
      this.setState({
        canSetClose: true,
      });
    }
  };

  render() {
    const { ticker } = this.props;
    const { price, dollar_change, percent_change } = this.state;
    return (
      <li className="list-item">
        <b>{ticker}</b> ${price}
        <span className="change" style={this.changeStyle()}>
          &nbsp;{dollar_change} | &nbsp;{percent_change}
        </span>
      </li>
    );
  }
}

export default StockRow;
