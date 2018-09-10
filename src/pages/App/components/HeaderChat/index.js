import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { AppHeader, Icon } from "./styles";

class MessageForm extends Component {

  handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  }
  
  render() {
    return (
      <AppHeader>
        <span><strong>{this.props.name}</strong></span>
        <div>
          <Icon>
            <i className="fa fa-question-circle"></i>
          </Icon>  
          <span onClick={this.handleClick}>
            Sair
          </span>
        </div>
      </AppHeader>
    );
  }
}

export default withRouter(MessageForm);

