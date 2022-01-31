// React imports :

import React, {useContext} from "react";
import { Text, View } from "react-native";

// Bootstrap imports :
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const Competences = (props) => {

  let comp = useContext(playerContext)
    comp = comp.comp

  return (
    <View>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Identité</th>
            <th>Stat</th>
            <th>Up !</th>
          </tr>
        </thead>
        <tbody>
            {comp.map((item, i) => {

                return ( 
                        <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.stat}</td>
                        <td>
                            <Button variant="outline-success" size="sm" value={item.name}>+</Button>

                            <Button variant="outline-danger" size="sm"> - </Button>
                        </td>
                        </tr>
                )
            })}
        </tbody>
      </Table>
    </View>
  );
};

export default Competences;
