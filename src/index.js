import React from "react";
import { render } from "react-dom";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import "./styles.css";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id} bsClass='buySellTextField'>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class BuySellAction extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      actionType: "BUY",
      buyCurrency: { code: 'TUSD', name: 'TrueUSD' },
      sellCurrency: { code: 'BTC', name: 'Bitcoin' }
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

    let submitButtonStyle = {
      minWidth: "9.6em",
      maxWidth: "18.3em",
      width: "18.3em",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    };

    buyButtonStyle.backgroundColor =
      this.state.actionType === "BUY" ? "#00A45B" : "#9CAAC1";

    sellButtonStyle.backgroundColor =
      this.state.actionType === "SELL" ? "#F75535" : "#9CAAC1";

    submitButtonStyle.backgroundColor =
      this.state.actionType === "BUY" ? "#00A45B" : "#F75535";

    const buyCurrency = this.state.buyCurrency;
    const sellCurrency = this.state.buyCurrency;
    const buyOrSellCurrency = this.state.actionType === "BUY" ? buyCurrency : sellCurrency;
    const submitButtonTitle = this.state.actionType + ' ' + buyOrSellCurrency.name;

    return (
      <div class="flex-container">
        <Form>
          <ButtonToolbar>
            <Button onClick={this.onClickBuy} style={buyButtonStyle}>
              BUY
            </Button>
            <Button onClick={this.onClickSell} style={sellButtonStyle}>
              SELL
            </Button>
          </ButtonToolbar>

          <div class="buySellCol">
            <div class="inputLabelRow">
              <FieldGroup
                id='inputQuantity'
                type='text'
                label='QUANTITY'
              />
              <span>TUSD</span>
            </div>
            <FieldGroup
              id='inputBid'
              type='text'
              label='BID'
            />
            <FieldGroup
              id='inputTotal'
              type='text'
              label='TOTAL'
            />
          </div>
          <Button type="submit" style={submitButtonStyle}>{submitButtonTitle}</Button>
        </Form>
      </div>

    );
  }
}

render(<BuySellAction />, document.getElementById("root"));
