// React imports :

import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";


// Component Import :
import HomePage from '../../HomePage/HomePage'

// API Variable

const apiAddress = "http://192.168.0.30:8080/players/";

// Context création :

let player = {};
export const playerContext = React.createContext(player);

// Component :

export const ApiProvider = () => {

  let [playerSelection, setPlayerSelection] = useState(1);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    getPlayer(playerSelection);
  };

  return (
    <View>
        <playerContext.Provider value={player}>
        <HomePage handleSubmit={handleSubmit} handlePlayerSelection={handlePlayerSelection} playerList={playerList}/>
        </playerContext.Provider>
    </View>
  );
};

export default ApiProvider;
