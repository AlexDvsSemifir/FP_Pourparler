// React Imports :
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Bootstrap imports :
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Bio = (props) => {

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
                    <td>{props.bio.firstName}</td>
                    </tr>
                    <tr>
                        <td>Nom</td>
                        <td>{props.bio.lastName}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{props.bio.age}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{props.bio.description}</td>
                    </tr>
                    <tr>
                        <td>Psychologie</td>
                        <td>{props.bio.psychologie}</td>
                    </tr>
                </tbody>
            </Table>
        </View>
    )
}
export default Bio;