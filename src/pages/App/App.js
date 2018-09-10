/* Core */
import React, { Component, Fragment } from 'react';
import * as moment from 'moment';
import api from "../../services/api";

/* Presentational */
import MessageForm from "./components/MessageForm";
import HeaderChat from "./components/HeaderChat";
import {
  Container,
  BubbleLeft,
  BubbleRight,
  BubbleRightContainer,
  BubbleLeftContainer,
  Info
} from "./styles";

export default class App extends Component {

  state = {
    messages: [
      {
        text: ['Olá, posso te ajudar?'],
        timestamp: Date.now(),
        author: 'Hobot'
      },
    ]
  }

pushToList = (message, author) => {
  this.askWatson(message);
  this.setState({
    messages: [...this.state.messages,
      {
        text: message,
        author,
        authortimestamp: Date.now()
      }
    ]}, () => {
      window.scrollTo(0,document.body.scrollHeight);
    })
  }

askWatson = async (message) => {
  const body = {
    input: { text: message},
    context: {  } 
  }

  const header = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  try {
    this.setState({ loading: true });
    const { data } = await api.post(`/message/`, body, header);
      
    this.setState({
      messages: [...this.state.messages,
        {
          text: data.output.text,
          author: "Hobot",
          authortimestamp: Date.now()
        }
      ]}, () => {
        window.scrollTo(0,document.body.scrollHeight);
    })

  } catch (err) {
    console.log(err);
  } finally {
      this.setState({ loading: false });
  }
}

  
  render() {
    return (
      <Fragment>
      <HeaderChat name="Hopbot" />
      <Container>
        {
          this.state.messages.map((item, index) => {
            if(item.author === 'Hobot'){
              return(
                <BubbleLeftContainer key={`${index}-left`}>
                  <Info>
                    <span><strong>{item.author}</strong></span>
                    <div>
                      <i className="fa fa-clock-o"> </i>  
                      <span>{moment(item.timestamp).fromNow()}</span>
                    </div>
                  </Info>
                  <BubbleLeft>
                    {item.text}
                  </BubbleLeft>
                </BubbleLeftContainer>
              ) 
                
            }else {
              return (
                <BubbleRightContainer key={`${index}-right`}>
                  <Info>
                    <div>
                      <i className="fa fa-clock-o"> </i>  
                      <span>{moment(item.timestamp).fromNow()}</span>
                    </div>
                    <span><strong>{item.author}</strong></span>
                  </Info>
                  <BubbleRight>
                    {item.text}
                  </BubbleRight>
                </BubbleRightContainer>
              )
            }
          })
        }
      </Container>
      <MessageForm  onSubmit={ message => this.pushToList(message, 'Me')}/>
      </Fragment>
    );
  }
}
