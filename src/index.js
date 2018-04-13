import React from "react";
import { render } from "react-dom";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class BuySellAction extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      actionType: "BUY"
    };

    // Q: Is this binding mandatory ?
    this.onClickBuy = this.onClickBuy.bind(this);
    this.onClickSell = this.onClickSell.bind(this);
  }

  onClickBuy = e => {
    this.setState({ actionType: "BUY" });
  };

  onClickSell = e => {
    this.setState({ actionType: "SELL" });
  };

  render() {
    let buyButtonStyle = {
      width: "9em",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    };
    let sellButtonStyle = {
      width: "9em",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    };

    buyButtonStyle.backgroundColor =
      this.state.actionType === "BUY" ? "#00A45B" : "#9CAAC1";

    sellButtonStyle.backgroundColor =
      this.state.actionType === "SELL" ? "#F75535" : "#9CAAC1";

    return (
      <div>
        <ButtonToolbar>
          <Button onClick={this.onClickBuy} style={buyButtonStyle}>
            BUY
          </Button>
          <Button onClick={this.onClickSell} style={sellButtonStyle}>
            SELL
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

render(<BuySellAction />, document.getElementById("root"));
