// React Imports :
import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";

// Bootstrap imports :
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const Bio = (props) => {

    let bio = useContext(playerContext)
    bio = bio.bio


    return ( 
        <View>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th colSpan="2" >Identité</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Prénom</td>
                    <td>{bio.firstName}</td>
                    </tr>
                    <tr>
                        <td>Nom</td>
                        <td>{bio.lastName}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{bio.age}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{bio.description}</td>
                    </tr>
                    <tr>
                        <td>Psychologie</td>
                        <td>{bio.psychologie}</td>
                    </tr>
                </tbody>
            </Table>
        </View>
    )
}
export default Bio;