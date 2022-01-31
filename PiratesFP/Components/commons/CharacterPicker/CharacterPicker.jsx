// React imports :

import React from "react";
import { View } from "react-native";

// Bootstrap imports :
import { Button, Form, FormGroup, FormSelect } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CharacterPicker = (props) => {
  return (
    <View>
      <Form onSubmit={props.handleSubmit}>
        <FormGroup className="mb-3">
          <FormSelect
            aria-label="Personnage"
            size="lg"
            onChange={props.handlePlayerSelection}
          >
            <option>Sélectionnez votre joueur :</option>
            {props.playerList.map((player) => {
              return (
                <option key={player.id} value={player.id}>
                  {player.bio.firstName}
                </option>
              );
            })}
          </FormSelect>
          <FormGroup className="d-grid gap-2">
            <Button variant="dark" size="lg" type="submit">
              Pick
            </Button>
          </FormGroup>
        </FormGroup>
      </Form>
    </View>
  );
};

export default CharacterPicker;
