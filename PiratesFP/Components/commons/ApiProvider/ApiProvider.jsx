// React imports :

import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";

// Component Import :
import HomePage from "../../HomePage/HomePage";

// API Variable

const apiAddress = "http://192.168.0.30:8080/players/";

// Context création :

export const playerContext = React.createContext();
export const apiAddressContext = React.createContext();
export const setPlayerContext = React.createContext();
export const playerSelectionContext = React.createContext();

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

  return (
    <View>
      <setPlayerContext.Provider value={setPlayer}>
        <apiAddressContext.Provider value={apiAddress}>
          <playerContext.Provider value={player}>
            <playerSelectionContext.Provider value={playerSelection}>
              <HomePage
                handleSubmit={handleSubmit}
                handlePlayerSelection={handlePlayerSelection}
                playerSelection={playerSelection}
                playerList={playerList}
              />
            </playerSelectionContext.Provider>
          </playerContext.Provider>
        </apiAddressContext.Provider>
      </setPlayerContext.Provider>
    </View>
  );
};

export default ApiProvider;
