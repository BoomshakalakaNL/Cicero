import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Icon, Button, Card, Grid, Image, Message, Form, Container } from "semantic-ui-react";
import Declaration from "../ethereum/declaration";
import factory from '../ethereum/factory';
import web3 from "../ethereum/web3";

class Test extends Component{
  static async getInitialProps(){
    const declarations = await factory.methods.getDeclarations().call();
    return { declarations };
  }

  constructor() {
    super();
    this.state = {
      data: [],
      summary: []
    };
  }
  componentDidMount() {
    let accounts = [];
    web3.eth.getAccounts()
      .then(res => accounts = res);
    this.props.declarations.forEach( function (element) {
      console.log(element + '; Account: '+accounts[0]);
    });
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=20`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));

  }

  render() {
    return (
      <Layout>
        <div class='display'>
          <Container>
            <h1>Test page</h1>
          </Container>
        </div>
        <Container>
          <ul>
            {this.state.data.map(el => (
              <li>
                {el.name}: {el.price_usd}
              </li>
            ))}
          </ul>

        </Container>
      </Layout>
    );
  }


}

export default Test;
