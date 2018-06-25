import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import Declaration from "../../ethereum/declaration";
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { getDeclarationFromSummary } from '../../scripts/main.js';

class EditDeclaration extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const declaration = Declaration(props.query.address);
    const summary = await declaration.methods
      .getDeclaration()
      .call({ from: accounts[0] });
    return {
      address: props.query.address,
      summary: summary
    };
  }
  state = {
    errorMessage: "",
    declarations: getDeclarationFromSummary(this.props.summary[3], this.props.summary[4], this.props.summary[5])
  };

  render(){
    console.log(this.state.declarations);
    return(
      <Layout>
        <h3>Bewerken declaratie</h3>
      </Layout>
    );
  }
}
export default EditDeclaration;
