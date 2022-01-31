// React imports :

import React, {useContext} from "react";
import { Text, View } from "react-native";

// Bootstrap imports :
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

// Context : 
import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const Carac = (props) => {

  let carac = useContext(playerContext)
    carac = carac.carac

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
            <td>{carac.cha}</td>
          </tr>
          <tr>
            <td>Force</td>
            <td>{carac.str}</td>
          </tr>
          <tr>
            <td>Instinct</td>
            <td>{carac.ins}</td>
          </tr>
          <tr>
            <td>Intel</td>
            <td>{carac.int}</td>
          </tr>
          <tr>
            <td>Mobilité</td>
            <td>{carac.mob}</td>
          </tr>
          <tr>
            <td>Vigueur</td>
            <td>{carac.vig}</td>
          </tr>
          <tr>
            <td>Volonté</td>
            <td>{carac.wil}</td>
          </tr>
        </tbody>
      </Table>
    </View>
  );
};

export default Carac;
