// React imports :

import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";

// Bootstrap Imports

import "bootstrap/dist/css/bootstrap.min.css";



// API Variable

const apiAddress = "http://192.168.0.30:8080/players/";

// Component :
import HomePage from '../../HomePage/HomePage'


let player = {};
export const playerContext = React.createContext(player);

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

  useEffect(() => {
    getPlayerList();
    getPlayer(playerSelection);
  }, []);

  const handlePlayerSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPlayerSelection(e.target.value);
  };

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
