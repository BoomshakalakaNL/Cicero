import factory from '../ethereum/factory';
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes.js';


class DeclarationIndex extends Component{
  static async getInitialProps(){
    const declarations = await factory.methods.getDeclarations().call();

    return { declarations };
  }

  renderDeclarations() {
    const items = this.props.declarations.map(address => {
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
        <h3>Declaraties</h3>
        {this.renderDeclarations()}
      </Layout>
    );
  }
}

export default DeclarationIndex;
