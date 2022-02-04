// React imports :

import React, { useContext } from "react";
import { Text, View } from "react-native";

// React Native Paper
import { DataTable } from "react-native-paper";

// Context :
import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const Carac = (props) => {
  let carac = useContext(playerContext);
  carac = carac.carac;

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Caractéristique</DataTable.Title>
          <DataTable.Title>Stat</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Charisme</DataTable.Cell>
          <DataTable.Cell>{carac.cha}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Force</DataTable.Cell>
          <DataTable.Cell>{carac.str}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Instinct</DataTable.Cell>
          <DataTable.Cell>{carac.ins}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Intel</DataTable.Cell>
          <DataTable.Cell>{carac.int}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Mobilité</DataTable.Cell>
          <DataTable.Cell>{carac.mob}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Vigueur</DataTable.Cell>
          <DataTable.Cell>{carac.vig}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Volonté</DataTable.Cell>
          <DataTable.Cell>{carac.wil}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default Carac;
