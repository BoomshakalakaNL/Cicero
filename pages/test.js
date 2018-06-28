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
  async componentDidMount() {
    let declarations = [];
    let accounts = await web3.eth.getAccounts();
    this.props.declarations.forEach( async function (element) {
      let declaration = new Declaration(element);
      let isValidated = await declaration.methods.isValidated().call({from: accounts[0]});
      let isAccepted = await declaration.methods.isAccepted().call({from: accounts[0]});
      //console.log('Declaration: '+element+'; isValidated: '+isValidated+'; isAccepted: '+isAccepted);
      declarations.push({
        declaration: element,
        isValidated: isValidated,
        isAccepted: isAccepted
      });
    });
    this.setState({data: declarations});
    console.log(this.state.data);
    this.forceUpdate();

  }

  getCardStyle(IsValidated, IsAccepted){
    return '30px solid pink';
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
                {el.declaration}: {el.isValidated.toString()} : {el.isAccepted.toString()}
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    );
  }


}

export default Test;
