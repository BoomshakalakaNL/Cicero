import factory from '../ethereum/factory';
import React, { Component } from 'react';
import { Card, Button, Container, Grid, Icon } from 'semantic-ui-react';
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

    return <Card.Group class='cicero-card' items={items} />;
  }

  render() {
    return (
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
          {this.renderDeclarations()}
        </Container>
      </Layout>
    );
  }
}

export default DeclarationIndex;
