import React, { Component } from 'react';


class Test extends Component{
  render() {
    console.log('Loading module ...');

    var mysql = require('mysql');
    console.log('Module loaded.');

    var connection = mysql.createConnection({
      host     : 'sql3.pcextreme.nl',
      user     : '54815cicero',
      password : '5728785',
      database : '54815cicero'
    });

    console.log('Establashing connection ...');
    connection.connect();
    console.log('Establased connection.');

    connection.query('SELECT * FROM clientInformation', function (err, rows, fields) {
      if (err) throw err;

      console.log('The solution is: ', rows[0].solution);
    });

    connection.end();
    return (
      <h1>Hello darkness my old friend, I&lquo;ve come to talk with you again ...</h1>
    );
  }
}

export default Test;
