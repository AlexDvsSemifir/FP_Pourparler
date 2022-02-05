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
          <DataTable.Title style={{flex: 5}}>Caractéristique</DataTable.Title>
          <DataTable.Title style={{flex: 1}}>Stat</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Charisme</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.cha}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Force</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.str}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Instinct</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.ins}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Intel</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.int}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Mobilité</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.mob}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Vigueur</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.vig}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 5}}>Volonté</DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>{carac.wil}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default Carac;
