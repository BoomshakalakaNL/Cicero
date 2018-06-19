import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class DeclaratieShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address
      // hier komt de summary van declaratie, zie contract
    };
  }



  render() {
    return (
      <Layout>
        <h3>Declaratie Details</h3>
        <p></p>
      </Layout>
    );
  }
}

export default DeclaratieShow;
