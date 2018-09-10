import React, { Component } from "react";

import { Form, Button, InputField } from "./styles";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errorMessage: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text.length === 0) {
      this.setState({ errorMessage: 'O campo não pode ser vazio =/' });  
      return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Faça sua pergunta aqui..."
          onChange={this.onChange}
          value={this.state.text}
          style={styles.input}
        />
        <Button type="submit">
          <i className="fa fa-send"></i>
        </Button>
      </Form>
    );
  }
}

const styles = {
  form: {
    display: "flex"
  },
  input: {
    display: "flex",
    color: "inherit",
    background: "none",
    outline: "none",
    borderWidth: 1,
    flex: 9,
    fontSize: 16,
    border: "none",
    paddingLeft: 10
  }
};
export default MessageForm;

