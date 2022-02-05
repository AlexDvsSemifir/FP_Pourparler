// React imports :

import React, { useContext } from "react";
import { Text, View, Button, FlatList } from "react-native";

// React Native Paper
import { DataTable } from "react-native-paper";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const Competences = (props) => {
  let comp = useContext(playerContext);
  comp = comp.comp;

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 4 }}>Compétences</DataTable.Title>
          <DataTable.Title style={{ flex: 1 }}>Stat</DataTable.Title>
          <DataTable.Title style={{ flex: 1 }}>Up !</DataTable.Title>
        </DataTable.Header>
        {comp.map((item, i) => {
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell style={{ flex: 4 }}>{item.name}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 1 }}>{item.stat}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 1 }}>
                <Button title="+" color="#0d1021" />
                <Button title=" - " color="#0d1021" />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

export default Competences;
