import React from "react";
import "./styles.scss";
import arrow from "../../images/up-arrow.svg";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      color: "blue"
    };
    this.handleClick = this.handleClick.bind(this);
    if (this.props.data.category === "marketing") this.state.color = "green";
    if (this.props.data.category === "admin") this.state.color = "orange";
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <section className={`${this.state.color}`}>
        <div onClick={this.handleClick} className={`question-container`}>
          <p className="question">{this.props.data.question}</p>
          <img
            className={`arrow ${this.state.open ? "flip" : ""}`}
            src={arrow}
            alt="arrow"
          />
        </div>
        <div className={`answer ${this.state.open ? "open" : ""}`}>
          <p>{this.props.data.answer}</p>
        </div>
      </section>
    );
  }
}

export default Collapsible;
