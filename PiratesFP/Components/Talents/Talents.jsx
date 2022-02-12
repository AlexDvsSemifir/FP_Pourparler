// React imports :

import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, FlatList } from "react-native";

// React Native Paper
import { DataTable } from "react-native-paper";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";
import TalentForm from "./TalentForm";

const Talents = () => {
  let player = useContext(playerContext);
  let talents = player.talents;
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Talent</DataTable.Title>
          <DataTable.Title>Description</DataTable.Title>
        </DataTable.Header>
        {talents.map((item, i) => {
          return (
            <DataTable.Row key={i}>
              <DataTable.Cell style={{ flex: 1 }}>
                {item.name} :{" "}
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 2, textAlign: "right" }}>
                {item.description}
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
      <TalentForm />
    </View>
  );
};

export default Talents;
