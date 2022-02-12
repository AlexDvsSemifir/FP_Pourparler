// React imports :

import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";

// Components import
import Carac from "../Carac/Carac";
import Competences from "../Competences/Competences";
import CompetencesSpe from "../CompetencesSpe/CompetencesSpe";
import CharacterPicker from "../commons/CharacterPicker/CharacterPicker";
import PlayerIdentity from "../PlayerIdentity/PlayerIdentity";
import HealthAndWounds from "../HealthAndWounds/HealthAndWounds";

import { playerContext } from "../commons/ApiProvider/ApiProvider";
import { useContext } from "react";
import Talents from "../Talents/Talents";

export const CharacterSheet = (props) => {
  let player = useContext(playerContext);
  let hp = player.hp;

  //
  const [caracExpanded, setCaracExpanded] = useState(false);
  const [compExpanded, setCompExpanded] = useState(false);
  const [compSpeExpanded, setCompSpeExpanded] = useState(false);
  const [bioExpanded, setBioExpanded] = useState(false);
  const [isWoundExpanded, setWoundIsExpanded] = useState(false);
  const [talentsExpand, setTalentsExpand] = useState(false)

  const handleCaracExpand = () => {
    setCaracExpanded(!caracExpanded);
    setCompExpanded(false);
    setCompSpeExpanded(false);
    setBioExpanded(false);
    setTalentsExpand(false)
  };
  const handleCompExpand = () => {
    setCompExpanded(!compExpanded);
    setCaracExpanded(false);
    setCompSpeExpanded(false);
    setBioExpanded(false);
    setTalentsExpand(false)
  };
  const handleCompSpeExpand = () => {
    setCompSpeExpanded(!compSpeExpanded);
    setCompExpanded(false);
    setCaracExpanded(false);
    setBioExpanded(false);
    setTalentsExpand(false)
  };
  const handleBioExpand = () => {
    setBioExpanded(!bioExpanded);
    setCompSpeExpanded(false);
    setCompExpanded(false);
    setCaracExpanded(false);
    setTalentsExpand(false)
  };
  const handleTalentsExpand = () => {
    setTalentsExpand(!talentsExpand)
    setBioExpanded(false);
    setCompSpeExpanded(false);
    setCompExpanded(false);
    setCaracExpanded(false);
  };

  const handleWoundsExpanded = () => {
    setWoundIsExpanded(!isWoundExpanded);
  };

  return (
    <View>
      <CharacterPicker
        handleSubmit={props.handleSubmit}
        handlePlayerSelection={props.handlePlayerSelection}
        playerList={props.playerList}
        playerSelection={props.playerSelection}
      />
      <PlayerIdentity />
      <Text />
      <Pressable
        style={{ flex: 1, alignItems: "center" }}
        onPress={handleWoundsExpanded}
      >
        <ImageBackground
          source={require("../../src/icons/tentacke_heart.webp")}
          style={styles.img}
        >
          <Text style={styles.healthBox}>{hp.current}</Text>
        </ImageBackground>
      </Pressable>
      {isWoundExpanded && <HealthAndWounds />}
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleCaracExpand}>
          <ImageBackground source={require("../../src/img/Skull_hat.png")} style={styles.menu} />
        </Pressable>
        <Pressable onPress={handleCompExpand}>
          <ImageBackground source={require("../../src/img/Roue.png")} style={styles.menu} />
        </Pressable>
        <Pressable onPress={handleCompSpeExpand}>
          <ImageBackground source={require("../../src/img/Swords.png")} style={styles.menu} />
        </Pressable>
        <Pressable onPress={handleTalentsExpand}>
          <ImageBackground source={require("../../src/img/Bottle.png")} style={styles.menu}/>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <ImageBackground source={require('../../src/img/Chest.png')} style={styles.menu}/>
        </Pressable>
      </View>

      {caracExpanded && <Carac />}
      {compExpanded && <Competences />}
      {compSpeExpanded && <CompetencesSpe />}
      {talentsExpand && <Talents />}
    </View>
  );
};

export default CharacterSheet;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    height :100
  },
  healthBox: {
    fontSize: 80,
    alignItems: "center",
    textAlign: "center",
    color: "#919191",
    position: 'absolute',    
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: 'Handsnow'
  },
  woundBox: {},
  img: {
    backgroundColor: "transparent",
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  menu: {
    backgroundColor: "transparent",
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
