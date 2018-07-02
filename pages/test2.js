import React, { Component } from 'react';
import Declaration from "../ethereum/declaration";
import factory from '../ethereum/factory';
import web3 from "../ethereum/web3";
import { Card, Button, Container, Grid, Icon, Message } from 'semantic-ui-react';
import { Link } from '../routes.js';
import Layout from '../components/Layout.js';

import { getClientName } from '../scripts/main.js';

class Test2 extends Component{

  static async getInitialProps(){
    const declarationAddresses = await factory.methods.getDeclarations().call();
    var data = [];

    for (var i = 0; i < declarationAddresses.length; i++) {
      var declaration = new Declaration(declarationAddresses[i]);
      var isValidated = await declaration.methods.isValidated().call();
      var isAccepted = await declaration.methods.isAccepted().call();

      var insurance = await declaration.methods.insurance().call();
      var client = await declaration.methods.client().call();
      var careAdminOff = await declaration.methods.careAdminOff().call();
      data.push({
        address: declarationAddresses[i],
        isValidated: isValidated,
        isAccepted: isAccepted,
        client: client,
        careAdminOff: careAdminOff,
        insurance: insurance
      });
    }
    console.log(data);
    return {declarationAddresses, data};
  }

  async componentDidMount() {
    let accounts = await web3.eth.getAccounts();
    this.setState({currentAccount: accounts[0]});
    let data = [];
    this.props.data.map(element => {
      if (this.state.currentAccount == element.careAdminOff || this.state.currentAccount == element.client || this.state.insurance)  {
        this.data.push(element);
      }
    });
    this.setState({data: this.data});
    console.log(this.state.data);
  }

  state = {
    currentAccount: "",
    data: []
  }


  getCardStyle(IsValidated, IsAccepted){
    if (!IsValidated){
      return '50px solid #831b78';
    }
    if (IsValidated && IsAccepted){
      return '50px solid #65b32e';
    }
    else {
      return '50px solid orange';
    }
  }

  render(){
    //NOTE: Check the statement and return something nice if the currentAccount is not a stakeholder
    return(
      <Layout>
        <div  class="display">
          <Container>
            <Grid verticalAlign='middle'>
              <Grid.Column floated='left' width={5}>
                <h1>Declaraties</h1>
              </Grid.Column>
              <Grid.Column floated='right' style={{textAlign: 'right'}} width={5}>
                <Link route='/declaraties/new'>
                  <a><Icon color='purple' name="add" size='big'/></a>
                </Link>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
        <Container>
          <Card.Group>
            {this.props.data.map(element => {
              if (this.state.currentAccount == element.careAdminOff || this.state.currentAccount == element.client || this.state.insurance)  {
                return (
                  <Card fluid style={{borderRight: this.getCardStyle(element.isValidated, element.isAccepted)}}>
                    <Card.Content>
                      <Card.Header>{element.address}</Card.Header>
                      <Card.Meta>{element.client} - {getClientName(element.client)}</Card.Meta>
                      <Card.Description>
                        <Link route={`/declaraties/${element.address}`}><a>Bekijk details</a></Link>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                )
              }
              else {
                return (
                  <Message info
                    icon='help'
                    content='Bij het controleren van uw wallet address hebben wij geen declaraties gevonden die u mag inzien.'
                  />
                )
              }
            })}
          </Card.Group>
        </Container>
      </Layout>
    );
  }
}
export default Test2;
