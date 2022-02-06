// React imports :

import React, { useState, useEffect, useContext } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

// Component Import :
import HomePage from "../../HomePage/HomePage";

// API Variable

const apiAddress = "http://192.168.0.30:8080/players/";

// Context création :

export const playerContext = React.createContext();
export const setPlayerContext = React.createContext();
export const playerSelectionContext = React.createContext();
export const refreshContext = React.createContext();
export const updatePlayerContext = React.createContext();

// Component :

export const ApiProvider = () => {
  let [playerSelection, setPlayerSelection] = useState(0);

  const [playerList, setPlayerList] = useState([
    {
      id: "",
      bio: "",
    },
  ]);

  const [player, setPlayer] = useState({
    id: "",
    bio: "",
    carac: "",
    comp: [],
    hp: {},
    wounds: [],
    compSpe: [],
    talents: [],
    money: "",
    inventory: {
      loot: "",
      cloth: "",
    },
    weapons: {
      slot1: "",
      slot2: "",
      slot3: "",
      slot4: "",
      slot5: "",
    },
  });

  /**
   * Récupère un player complet depuis l'API
   * @param {number} id
   */
  const getPlayer = async (id) => {
    try {
      const response = await fetch(apiAddress + id);
      const json = await response.json();
      console.log(json);
      setPlayer(json);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Récupère la liste complète des utilisateurs avec l'ensemble de leurs paramètres.
   */
  const getPlayerList = async () => {
    try {
      const response = await fetch(apiAddress);
      const json = await response.json();
      console.log(json);
      setPlayerList(json);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Ecoute le chargement de l'app et lance les scripts associés
   */
  useEffect(() => {
    getPlayerList();
    getPlayer(playerSelection);
  }, []);

  /**
   * Récupère la sélection du joueur depuis le formulaire
   * @param {Event} e
   */
  const handlePlayerSelection = (value, index) => {
    setPlayerSelection(value);
  };

  /**
   * Met à jour le contenu de la page en fonction de la sélection faire par l'utilisateur
   * @param {Event} e
   */
  const handleSubmit = () => {
    getPlayer(playerSelection);
  };

  const updatePlayer = async (player) => {
    try {
      const address = apiAddress + playerSelection;
      const resquestOption = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      };
      const response = await fetch(address, resquestOption);
      const json = await response.text();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const BackgroundImage = {};

  return (
    <View>
      <updatePlayerContext.Provider value={updatePlayer}>
        <refreshContext.Provider value={handleSubmit}>
          <setPlayerContext.Provider value={setPlayer}>
              <playerContext.Provider value={player}>
                <playerSelectionContext.Provider value={playerSelection}>
                  <ImageBackground
                    style={[styles.containter, { zIndex: -1 }]}
                    source={require("../../../src/img/Background.jpg")}
                  />
                  <ScrollView style={[styles.scrollview]}>
                    <HomePage
                      handleSubmit={handleSubmit}
                      handlePlayerSelection={handlePlayerSelection}
                      playerSelection={playerSelection}
                      playerList={playerList}
                    />
                  </ScrollView>
                </playerSelectionContext.Provider>
              </playerContext.Provider>
          </setPlayerContext.Provider>
        </refreshContext.Provider>
      </updatePlayerContext.Provider>
    </View>
  );
};

export default ApiProvider;

const styles = StyleSheet.create({
  containter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  scrollview: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
