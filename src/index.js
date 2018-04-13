import React from "react";
import { render } from "react-dom";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const buttonStyles = { width: "9em" };
const chosenButton = { "background-color": "coral" };

class BuySellAction extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      actionType: "BUY"
    };

    // Q: Is this binding mandatory ?
    this.onClickBuySell = this.onClickBuySell.bind(this);
  }

  onClickBuySell = e => this.setState({ price: e.target.value });

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button style={{ ...buttonStyles, ...chosenButton }}>BUY</Button>
          <Button style={buttonStyles}>SELL</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

render(<BuySellAction />, document.getElementById("root"));
