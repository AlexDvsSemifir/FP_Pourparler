// React imports :

import React, { useContext } from "react";
import { Text, View } from "react-native";

// Components import

import Bio from '../Bio/Bio'
import Carac from "../Carac/Carac";
import Competences from "../Competences/Competences";

// Bootstrap imports :

import { Button, Form, FormGroup, FormSelect } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { playerContext } from "../commons/ApiProvider/ApiProvider";

export const HomePage = (props) => {

  let player = useContext(playerContext);

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
        <Bio />
        <Carac />
        <Competences />
      
    </View>
  );
};

export default HomePage;
