// React imports :

import React, { useContext } from "react";
import { Text, View, Button } from "react-native";

// React Native Paper
import { DataTable } from "react-native-paper";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

const CompetencesSpe = () => {
    let compSpe = useContext(playerContext);
    compSpe = compSpe.compSpe;

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 2}}>Compétences Spéciales</DataTable.Title>
          <DataTable.Title>Stat</DataTable.Title>
          <DataTable.Title>Up !</DataTable.Title>
        </DataTable.Header>
        {compSpe.map((item, i) => {
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
      <Button title="Ajouter une compétence" />
    </View>
  );
};

export default CompetencesSpe;
