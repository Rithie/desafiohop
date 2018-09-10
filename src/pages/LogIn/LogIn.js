import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha usuário e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth", { username, password },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Ops, algo está errado, verifique se estão realmente iguais T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="React logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
