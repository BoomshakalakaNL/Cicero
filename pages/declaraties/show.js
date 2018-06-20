import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button } from 'semantic-ui-react';
import Declaration from '../../ethereum/declaration';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class DeclarationShow extends Component{
  static async getInitialProps(props){
    return{
      address: props.query.address
    };
  }
  state = {
    errorMessage: '',
    client: '',
    insurance: '',
    careAdminOff: '',
    careCodes: '',
    carePrices: '',
    dateDeclaration: '',
    isValidated: '',
    isAccepted: '',
    loading: false
  }

  load = async (event) => {
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: ''});
    try {
      const declaration = Declaration(this.props.address);
      const summary = await declaration.methods.getDeclaration().call({from:accounts[0]});
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
    }
    catch (err) {
      console.log(err.message);
      this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
    console.log(this.state);
  };

  render(){
    return(
      <Layout>
        <h3>Declaratie details</h3>
        <p>Declaratie address: {this.props.address}</p>
        <br/>
        <Button loading={this.state.loading} onClick={this.load} primary>Load</Button>
      </Layout>
    );
  }
}

export default DeclarationShow;
