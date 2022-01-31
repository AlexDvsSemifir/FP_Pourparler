// React imports :

import React from "react";
import { Text, View } from "react-native";

// Bootstrap imports :
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Carac = (props) => {
  return (
    <View>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Caractéristique</th>
            <th>Stat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charisme</td>
            <td>{props.carac.cha}</td>
          </tr>
          <tr>
            <td>Force</td>
            <td>{props.carac.str}</td>
          </tr>
          <tr>
            <td>Instinct</td>
            <td>{props.carac.ins}</td>
          </tr>
          <tr>
            <td>Intel</td>
            <td>{props.carac.int}</td>
          </tr>
          <tr>
            <td>Mobilité</td>
            <td>{props.carac.mob}</td>
          </tr>
          <tr>
            <td>Vigueur</td>
            <td>{props.carac.vig}</td>
          </tr>
          <tr>
            <td>Volonté</td>
            <td>{props.carac.wil}</td>
          </tr>
        </tbody>
      </Table>
    </View>
  );
};

export default Carac;
