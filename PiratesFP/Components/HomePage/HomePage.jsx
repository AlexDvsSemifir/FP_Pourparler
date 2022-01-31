// React imports :

import React from "react";
import { Text, View } from "react-native";

// Components import

import Bio from "../Bio/Bio";
import Carac from "../Carac/Carac";
import Competences from "../Competences/Competences";

// Bootstrap imports :

import "bootstrap/dist/css/bootstrap.min.css";
import CharacterPicker from "../commons/CharacterPicker/CharacterPicker";

export const HomePage = (props) => {
  return (
    <View>
      <CharacterPicker
        handleSubmit={props.handleSubmit}
        handlePlayerSelection={props.handlePlayerSelection}
        playerList={props.playerList}
      />
      <Bio />
      <Carac />
      <Competences />
    </View>
  );
};

export default HomePage;
