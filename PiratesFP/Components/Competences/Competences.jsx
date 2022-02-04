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
          <DataTable.Title style={{flex: 2}}>Compétences</DataTable.Title>
          <DataTable.Title>Stat</DataTable.Title>
          <DataTable.Title>Up !</DataTable.Title>
        </DataTable.Header>
        {comp.map((item, i) => {
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.stat}</DataTable.Cell>
              <DataTable.Cell>
                <Button
                  title="+"
                  color="#0d1021"
                />

                <Button
                  title=" - "
                  color="#0d1021"
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

export default Competences;
