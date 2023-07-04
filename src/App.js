import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Keyboard />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Calc id="calculator" />
    </div>
  );
}
class Buttons extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.click(this.props.name)}
        className={this.props.btnClass}
      >
        {this.props.name}
      </button>
    );
  }
}
class ButtonsStack extends React.Component {
  render() {
    return this.props.names.map((name) => (
      <Buttons
        click={this.props.click}
        btnClass={this.props.btnClass}
        name={name}
      />
    ));
  }
}
class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  click(name) {
    let inpText = document.getElementById("inptext");
    if (name === "<-") {
      inpText.textContent = inpText.textContent.slice(
        0,
        inpText.textContent.length - 1
      );
    } else {
      inpText.textContent = inpText.textContent + name;
      console.log(name);
    }
  }
  render() {
    return (
      <div className="keyboard">
        <div className="text-block">
          <text id="inptext"></text>
        </div>
        <ButtonsStack
          click={this.click}
          btnClass="buttons"
          names={["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]}
        />
        <br />
        <ButtonsStack
          click={this.click}
          btnClass="buttons"
          names={["a", "s", "d", "f", "g", "h", "j", "k", "l"]}
        />
        <br />
        <ButtonsStack
          click={this.click}
          btnClass="buttons"
          names={["z", "x", "c", "v", "b", "n", "m"]}
        />
        <br />
        <ButtonsStack
          click={this.click}
          btnClass="buttons sl"
          names={[" ", "<-"]}
        />
        <br />
      </div>
    );
  }
}

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.compute = this.compute.bind(this);
  }
  compute(name) {
    let inpText = document.getElementById("clctext");
    let first = Number(inpText.textContent.split(" ")[0]);
    let op = inpText.textContent.split(" ")[1];
    let second = Number(inpText.textContent.split(" ")[2]);

    if (
      name === "enter" ||
      ([" * ", " + ", " - ", " / "].includes(name) &&
        inpText.textContent.split(" ").length >= 3)
    ) {
      if (op === "+") {
        inpText.textContent = first + second;
      } else if (op === "-") {
        inpText.textContent = first - second;
      } else if (op === "/") {
        inpText.textContent = first / second;
      } else if (op === "*") {
        inpText.textContent = first * second;
      }
      if ([" * ", " + ", " - ", " / "].includes(name)) {
        inpText.textContent = inpText.textContent + name;
      }
    } else if (name === "<-") {
      inpText.textContent = inpText.textContent.slice(
        0,
        inpText.textContent.length - 1
      );
    } else {
      inpText.textContent = inpText.textContent + name;
    }
  }
  render() {
    return (
      <div>
        <div className="text-block">
          <text id="clctext"></text>
        </div>
        <ButtonsStack
          names={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
          btnClass="buttons"
          click={this.compute}
        />{" "}
        <br />
        <ButtonsStack
          names={[" + ", " - ", " / ", " * ", "<-", "enter"]}
          btnClass="buttons sl"
          click={this.compute}
        />
      </div>
    );
  }
}
