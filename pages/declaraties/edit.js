import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import Declaration from "../../ethereum/declaration";
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class EditDeclaration extends Component {
  render(){
    return(
      <Layout>
        <h3>Bewerken declaratie</h3>
      </Layout>
    );
  }
}
export default EditDeclaration;
