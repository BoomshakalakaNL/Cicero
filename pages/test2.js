import React, { Component } from 'react';
import Declaration from "../ethereum/declaration";
import factory from '../ethereum/factory';
import web3 from "../ethereum/web3";
import { Card, Button, Container, Grid, Icon } from 'semantic-ui-react';
import { Link } from '../routes.js';
import Layout from '../components/Layout.js';

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

    return {declarationAddresses, data};
  }

  async componentDidMount() {
    let accounts = await web3.eth.getAccounts();
    this.setState({currentAccount: accounts[0]});
  }

  state = {
    currentAccount: "",
    data: []
  }


  getCardStyle(IsValidated, IsAccepted){
    if (!IsValidated){
      return '50px solid pink';
    }
    if (IsValidated && IsAccepted){
      return '50px solid green';
    }
    else {
      return '50px solid orange';
    }
  }

  render(){
    //NOTE: Check the statement and return something nice if the currentAccount is not a stakeholder
    return(
      <Layout>
        <pre>
          <ul>
          {this.props.data.map(element => {
            if (this.state.currentAccount == element.careAdminOff || this.state.currentAccount == element.client || this.state.insurance)  {
              return ( <li>{element.address}, Validated: {element.isValidated.toString()}, Accepted: {element.isAccepted.toString()}</li> )
            }
            else {
              return ( null )
            }
          })}
          </ul>
        </pre>
        <Container>
          <Card.Group>
            {this.props.data.map(element => {
              if (this.state.currentAccount == element.careAdminOff || this.state.currentAccount == element.client || this.state.insurance)  {
                return (
                  <Card fluid style={{borderRight: this.getCardStyle(element.isValidated, element.isAccepted)}}>
                    <Card.Content>
                      <Card.Header>{element.address}</Card.Header>
                      <Card.Meta>{element.client}</Card.Meta>
                      <Card.Description>
                        <Link route={`/declaraties/${element.address}`}><a>Bekijk details</a></Link>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                )
              }
              else {
                return ( null )
              }
            })}
          </Card.Group>
        </Container>
      </Layout>
    );
  }
}
export default Test2;
