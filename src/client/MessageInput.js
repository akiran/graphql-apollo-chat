import React from "react";

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  setText = e => {
    this.setState({
      text: e.target.value
    });
  };
  addMessage = e => {
    if (e.key === "Enter") {
      console.log("send");
    }
  };
  render() {
    return (
      <div>
        <input
          className="form-control"
          value={this.state.text}
          onChange={this.setText}
          onKeyDown={this.addMessage}
        />
      </div>
    );
  }
}
