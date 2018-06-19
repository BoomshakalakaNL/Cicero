import factory from '../ethereum/factory';
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes.js';


class DeclaratieIndex extends Component{
  static async getInitialProps(){
    const declaraties = await factory.methods.getDeployedDeclaraties().call();

    return { declaraties };
  }

  renderDeclaraties() {
    const items = this.props.declaraties.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/declaraties/${address}`}>
            <a>Bekijk details</a>
          </Link>
          ),
        fluid: true,
        style: { overflowWrap: 'break-word' }
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1>Hello World</h1>
        {this.renderDeclaraties()}
      </Layout>
    );
  }
}

export default DeclaratieIndex;
