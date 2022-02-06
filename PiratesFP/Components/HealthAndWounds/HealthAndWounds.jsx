// React Imports :
import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";

// React Native Paper
import { DataTable, TextInput } from "react-native-paper";

// Collapse :
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

import { Heart } from "react-native-shapes";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";
import NewWound from "./NewWound";

const HealthAndWounds = () => {
  let hp = useContext(playerContext);
  hp = hp.hp;
  let wounds = useContext(playerContext);
  wounds = wounds.wounds;

  const [isWoundExpanded, setWoundIsExpanded] = useState(false);
  const [isNewWoundExpanded, setNewWoundIsExpanded] = useState(false);

  const handleWoundsExpanded = () => {
    setWoundIsExpanded(!isWoundExpanded);
  };
  const handleNewWoundExpanded = () => {
    setNewWoundIsExpanded(!isNewWoundExpanded);
  };

  return (
    <View>
      <Collapse isExpanded={isWoundExpanded}>
        <CollapseHeader>
          <Pressable
            style={{ flex: 1, alignItems: "center" }}
            onPress={handleWoundsExpanded}
          >
            <ImageBackground
              source={require("../../src/img/heart.webp")}
              style={styles.img}
            >
              <Text style={styles.healthBox}>{hp.current}</Text>
            </ImageBackground>
          </Pressable>
          <Text></Text>
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.container}>
            <DataTable style={styles.woundBox}>
              <DataTable.Header>
                <DataTable.Title style={{ flex: 1 }}>Del</DataTable.Title>
                <DataTable.Title style={{ flex: 5 }}>Blessure</DataTable.Title>
                <DataTable.Title style={{ flex: 2 }}>PV</DataTable.Title>
                <DataTable.Title style={{ flex: 1 }}>Down</DataTable.Title>
              </DataTable.Header>
              {wounds.map((item, i) => {
                return (
                  <DataTable.Row key={i}>
                    <DataTable.Cell style={{ flex: 1 }}>
                      <Button title="X" />
                    </DataTable.Cell>
                    <DataTable.Cell style={{ flex: 5, fontSize: 20 }}>
                      {item.localisation}
                    </DataTable.Cell>
                    <DataTable.Cell style={{ flex: 2 }}>
                      {item.pv}
                    </DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1 }}>
                      <Pressable>
                        <Heart size={1} />
                      </Pressable>
                    </DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
          </View>
          <View>
            <Collapse isExpanded={isNewWoundExpanded}>
              <CollapseHeader style={{flex: 1, alignItems: 'center'}}>
                <Pressable onPress={handleNewWoundExpanded}>
                  <Image 
                  style={styles.plusIcon}
                  source={require('../../src/icons/plus.png')}
                  />
                </Pressable>
                <Text />
              </CollapseHeader>
              <CollapseBody>
                <NewWound handleNewWoundExpanded={handleNewWoundExpanded}/>
              </CollapseBody>
            </Collapse>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default HealthAndWounds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  healthBox: {
    flex: 1,
    fontSize: 50,
    alignItems: "center",
    textAlign: "center",
    color: "black",
  },
  woundBox: {
    flex: 3,
  },
  wound: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
  },
  woundCell: {
    flex: 10,
    textAlign: "center",
  },
  img: {
    backgroundColor: "transparent",
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  plusIcon: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    resizeMode: "contain",
  }
});
