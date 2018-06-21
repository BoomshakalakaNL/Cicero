import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import Declaration from "../../ethereum/declaration";
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

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
    client: this.props.summary[1],
    insurance: this.props.summary[0],
    careAdminOff: this.props.summary[2],
    careCodes: this.props.summary[3].split(";"),
    careAmounts: this.props.summary[4].split(";"),
    carePrices: this.props.summary[5].split(";"),
    dateDeclaration: this.props.summary[6],
    dateEndDeclaration: this.props.summary[7],
    isValidated: this.props.summary[8],
    isAccepted: this.props.summary[9],
    loading: false,
    grandTotal: 0
  };

  render(){
    console.log(this.props.summary);
    return(
      <Layout>
        <h3>Bewerken declaratie</h3>
      </Layout>
    );
  }
}
export default EditDeclaration;
