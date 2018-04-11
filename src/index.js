import React from "react";
import { render } from "react-dom";
import { DropdownButton } from "react-bootstrap";
import { MenuItem } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "./styles.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <FormGroup>
      <DropdownButton
        bsStyle="Default"
        title="Choose Action"
        id={"DropDownBuySell"}
      >
        <MenuItem eventKey="1" active>
          Buy
        </MenuItem>
        <MenuItem eventKey="2">Sell</MenuItem>
      </DropdownButton>
    </FormGroup>
  </div>
);

render(<App />, document.getElementById("root"));
