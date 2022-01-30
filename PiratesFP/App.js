// Default imports :

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Component } from "react";
import { Text, View } from "react-native";

// API data :

// App

export default function App() {
  
  const [player, setPlayer] = useState({
    id: "",
    bio: "",
    carac: "",
    comp: "",
    compSpe: "",
    money: "",
    inventory: {
      loot: "",
      cloth: ""
    },
    weapons: {
      slot1: "",
      slot2: "",
      slot3: "",
      slot4: "",
      slot5: ""
    }
  });

  const getPlayer = async (id) => {
    try {
      const response = await fetch("http://localhost:8080/players/" + id);
      const json = await response.json();
      console.log(json);
      setPlayer((json));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayer(1);
  }, []);

  return (
    <View>
      <Text>On tente des trucs !</Text>
      <Text>{player.id}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
