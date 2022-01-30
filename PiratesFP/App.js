// Default imports :

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import { Text, View } from "react-native";

// App

export default function App() {

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
    comp: "",
    compSpe: "",
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
      const response = await fetch("http://localhost:8080/players/" + id);
      const json = await response.json();
      console.log(json);
      setPlayer(json);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayerList = async () => {
    try {
      const response = await fetch("http://localhost:8080/players/");
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
    setPlayerSelection(e.target.value)
    getPlayer(playerSelection)
  }

  return (
    <View>
      <Form onSubmit={handlePlayerSelection}>
        <FormGroup className="mb-3">
          <FormSelect aria-label="Personnage" onChange={handlePlayerSelection}>
            <option>Sélectionnez votre joueur :</option>
            {playerList.map((player) => {
              return (
                <option key={player.id} value={player.id} >
                  {player.bio.firstName} 
                </option>
              );
            })}
          </FormSelect>
          <Button type="submit">Pick</Button>
        </FormGroup>
      </Form>
      <Text>Player ID : {player.id}</Text>
      <Text>Player Name : {player.bio.firstName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
