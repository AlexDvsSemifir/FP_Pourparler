// React imports :

import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";

// React Native Paper
import { DataTable } from "react-native-paper";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

// Component imports :

import StatButton from "../commons/StatButton/StatButton";

export const Competences = (props) => {

  useEffect(() => {
  }, [StatButton] )

  let comp = useContext(playerContext);
  comp = comp.comp;

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 5 }}>Compétences</DataTable.Title>
          <DataTable.Title style={{ flex: 2 }}>Stat</DataTable.Title>
          <DataTable.Title style={{ flex: 1 }}>Up !</DataTable.Title>
          <DataTable.Title style={{ flex: 1 }}>Down !</DataTable.Title>
        </DataTable.Header>
        {comp.map((item, i) => {
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell style={{ flex: 5 }}>{item.name}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 2 }}>{item.stat}</DataTable.Cell>
              <StatButton
                action="+"
                statName={item.name}
                statValue={item.stat}
                index={i}
              />
              <StatButton action=" - " />
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

export default Competences;
