// React Imports :
import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";

// React Native Paper
import { DataTable } from "react-native-paper";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const Bio = (props) => {

    let bio = useContext(playerContext)
    bio = bio.bio
    
    return ( 
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Identité</DataTable.Title>
                </DataTable.Header>
                    <DataTable.Row>
                    <DataTable.Cell>Prénom</DataTable.Cell>
                    <DataTable.Cell>{bio.firstName}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Nom</DataTable.Cell>
                        <DataTable.Cell>{bio.lastName}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Age</DataTable.Cell>
                        <DataTable.Cell>{bio.age}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Description</DataTable.Cell>
                        <DataTable.Cell>{bio.description}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Psychologie</DataTable.Cell>
                        <DataTable.Cell>{bio.psychologie}</DataTable.Cell>
                    </DataTable.Row>
            </DataTable>
        </View>
    )
}
export default Bio;