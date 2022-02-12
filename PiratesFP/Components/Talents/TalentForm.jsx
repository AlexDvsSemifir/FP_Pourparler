import { View, Text, StyleSheet, Button, Alert, TextInput } from "react-native";
import React, { useContext, useState } from "react";

// Context :
import {
  playerContext,
  setPlayerContext,
  updatePlayerContext,
} from "../commons/ApiProvider/ApiProvider";

const TalentForm = () => {
  const player = useContext(playerContext);
  const setPlayer = useContext(setPlayerContext);
  const updatePlayer = useContext(updatePlayerContext);

  const [newTalentLabel, setNewTalentLabel] = useState("");
  const [newTalentDescription, setNewTalentDescription] = useState("");

  const handleChangeLabel = () => {
    setNewTalentLabel(newTalentLabel);
  };

  const handleChangeDescription = () => {
    setNewTalentDescription(newTalentDescription);
  };

  const handlePress = () => {
    player.talents.push({name: newTalentLabel, description: newTalentDescription})
    setPlayer({
        ...player
    })
    updatePlayer(player);
    setNewTalentLabel("")
    setNewTalentDescription("")
  }

  return (
    <View>
      <View style={styles.formBlock}>
        <TextInput
          onChangeText={handleChangeLabel}
          value={newTalentLabel}
          placeholder={"Nouveau talent"}
          style={styles.labelInput}
        />
        <Text />
        <TextInput
          onChangeText={handleChangeDescription}
          value={newTalentDescription}
          placeholder={"Description"}
          style={styles.descInput}
        />
      </View>
      <Button title='+' onPress={handlePress}/>
    </View>
  );
};

export default TalentForm;

const styles = StyleSheet.create({
  formBlock: {
    flex: 1,
    flexDirection: "row",
  },
  labelInput: {
    flex: 1,
  },
  descInput: {
    flex: 2,
  },
});
