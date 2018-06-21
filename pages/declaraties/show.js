import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Card } from "semantic-ui-react";
import Declaration from "../../ethereum/declaration";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

class DeclarationShow extends Component {
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
    loading: false
  };

  load = async event => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const declaration = Declaration(this.props.address);
      const summary = await declaration.methods
        .getDeclaration()
        .call({ from: accounts[0] });
      this.setState({
        insurance: summary[0],
        client: summary[1],
        careAdminOff: summary[2],
        careCodes: summary[3].split(";"), // .join(";")
        careAmounts: summary[4].split(";"),
        carePrices: summary[5].split(";"), // .join(";")
        dateDeclaration: summary[6],
        dateEndDeclaration: summary[7],
        isValidated: summary[8],
        isAccepted: summary[9]
      });
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
    console.log(this.state);
  };

  render() {
    return (
      <Layout>
        <h3>Declaratie details</h3>
        <p>Declaratie address: {this.props.address}</p>
        <br />
        <Card.Group itemsPerRow={6}>
          <Card>
            <Card.Content>
              <Card.Header>{this.state.careCodes[0]}</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <br />
        <Button loading={this.state.loading} onClick={this.load} primary>
          Load
        </Button>
      </Layout>
    );
  }
}

export default DeclarationShow;
