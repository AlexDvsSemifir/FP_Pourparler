// React imports :

import React, { useState } from "react";
import { View } from "react-native";

// Other :
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";

export const CharacterPicker = (props) => {


  return (
    <View>
      <Picker
        selectedValue={props.playerSelection}
        onValueChange={(itemValue, itemIndex) => {
          props.handlePlayerSelection(itemValue);
        }}
      >
        <Picker.Item label={'Sélectionnez un joueur'} value={0}/>
        {props.playerList.map((player) => {
          return (
            <Picker.Item
              key={player.id}
              value={player.id}
              label={player.bio.firstName}
            />
          );
        })}
      </Picker>
      <Button mode="contained" onPress={props.handleSubmit} color="#0d1021">
        Sélectionner
      </Button>
    </View>
  );
};

export default CharacterPicker;
