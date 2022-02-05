// React imports :

import React, { useState } from "react";
import { View } from "react-native";

// Bootstrap imports :
// import { Button, Form, FormGroup, FormSelect } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { Picker } from "@react-native-picker/picker";
// React Native Paper
import { Button } from "react-native-paper";

export const CharacterPicker = (props) => {
  const [itemValue, SetItemValue] = useState(1);

  return (
    <View>
      <Picker
        selected={itemValue}
        onValueChange={(itemValue, itemIndex) => {
          SetItemValue(itemValue);
          props.handlePlayerSelection(itemValue);
        }}
      >
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
