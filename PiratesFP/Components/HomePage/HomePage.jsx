// React imports :

import React, { useState } from "react";
import { Text, View, Pressable, Touchable } from "react-native";

// Components import

import Bio from "../Bio/Bio";
import Carac from "../Carac/Carac";
import Competences from "../Competences/Competences";
import CharacterPicker from "../commons/CharacterPicker/CharacterPicker";

// React Native Paper
import { Button } from "react-native-paper";

// COllapse React Native
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import CompetencesSpe from "../CompetencesSpe/CompetencesSpe";

export const HomePage = (props) => {
  //
  const [caracExpanded, setCaracExpanded] = useState(false);
  const [compExpanded, setCompExpanded] = useState(false);
  const [compSpeExpanded, setCompSpeExpanded] = useState(false);

  const handleCaracExpand = () => {
    setCaracExpanded(!caracExpanded);
    setCompExpanded(false);
  };
  const handleCompExpand = () => {
    setCompExpanded(!compExpanded);
    setCaracExpanded(false);
  };
  const handleCompSpeExpand = () => {
    setCompSpeExpanded(!compSpeExpanded);
    setCompExpanded(false);
    setCaracExpanded(false);
  };

  return (
    <View>
      <CharacterPicker
        handleSubmit={props.handleSubmit}
        handlePlayerSelection={props.handlePlayerSelection}
        playerList={props.playerList}
      />
      <Bio />
      <Collapse isExpanded={caracExpanded}>
        <CollapseHeader>
          <Button mode="contained" onPress={handleCaracExpand} color="#0d1021">
            Caractéristiques
          </Button>
        </CollapseHeader>
        <CollapseBody>
          <Carac />
        </CollapseBody>
      </Collapse>
      <Collapse isExpanded={compExpanded}>
        <CollapseHeader>
          <Button mode="contained" onPress={handleCompExpand} color="#0d1021">
            Compétences
          </Button>
        </CollapseHeader>
        <CollapseBody>
          <Competences />
        </CollapseBody>
      </Collapse>
      <Collapse isExpanded={compSpeExpanded}>
        <CollapseHeader>
          <Button
            mode="contained"
            onPress={handleCompSpeExpand}
            color="#0d1021"
          >
            Compétences Spéciales
          </Button>
        </CollapseHeader>
        <CollapseBody>
          <CompetencesSpe />
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default HomePage;
