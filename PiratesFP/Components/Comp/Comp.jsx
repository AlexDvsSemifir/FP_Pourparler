// React imports :

import React from "react";
import { Text, View } from "react-native";

// Bootstrap imports :
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export const Comp = (props) => {

  // try
  let comp = useContext(player.comp) 

  return (
    <View>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Identité</th>
            <th>Stat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Armes à feu</td>
            <td>{props.comp.armesFeu}</td>
          </tr>
          <tr>
            <td>Armes Blanches (légères)</td>
            <td>{props.comp.armesBLeger}</td>
          </tr>
          <tr>
            <td>Armes Blanches (lourdes)</td>
            <td>{props.comp.armesBLourd}</td>
          </tr>
          <tr>
            <td>Artisanat</td>
            <td>{props.comp.artisanat}</td>
          </tr>
          <tr>
            <td>Commandement</td>
            <td>{props.comp.command}</td>
          </tr>
          <tr>
            <td>Crochetage</td>
            <td>{props.comp.crochetage}</td>
          </tr>
          <tr>
            <td>Deguisement</td>
            <td>{props.comp.deguisement}</td>
          </tr>
          <tr>
            <td>Discrétion</td>
            <td>{props.comp.discretion}</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>{props.comp.education}</td>
          </tr>
          <tr>
            <td>Endurance</td>
            <td>{props.comp.endurance}</td>
          </tr>
          <tr>
            <td>Equitation</td>
            <td>{props.comp.equitation}</td>
          </tr>
          <tr>
            <td>Escalade</td>
            <td>{props.comp.escalade}</td>
          </tr>
          <tr>
            <td>Escamotage</td>
            <td>{props.comp.escamotage}</td>
          </tr>
          <tr>
            <td>Esquive</td>
            <td>{props.comp.esquive}</td>
          </tr>
          <tr>
            <td>Evaluation</td>
            <td>{props.comp.evaluation}</td>
          </tr>
          <tr>
            <td>Intimidation</td>
            <td>{props.comp.intimidation}</td>
          </tr>
          <tr>
            <td>Jeu</td>
            <td>{props.comp.jeu}</td>
          </tr>
          <tr>
            <td>Natation</td>
            <td>{props.comp.natation}</td>
          </tr>
          <tr>
            <td>Navigation</td>
            <td>{props.comp.navigation}</td>
          </tr>
          <tr>
            <td>Orientation</td>
            <td>{props.comp.orientation}</td>
          </tr>
          <tr>
            <td>Perception</td>
            <td>{props.comp.perception}</td>
          </tr>
          <tr>
            <td>Perspicacité</td>
            <td>{props.comp.perspicacite}</td>
          </tr>
          <tr>
            <td>Pistage</td>
            <td>{props.comp.pistage}</td>
          </tr>
          <tr>
            <td>Pugilat</td>
            <td>{props.comp.pugilat}</td>
          </tr>
          <tr>
            <td>Recherches</td>
            <td>{props.comp.recherches}</td>
          </tr>
          <tr>
            <td>Resistance à l'alcool</td>
            <td>{props.comp.resistAlcool}</td>
          </tr>
          <tr>
            <td>Rhétorique</td>
            <td>{props.comp.rhetorique}</td>
          </tr>
          <tr>
            <td>Séduction</td>
            <td>{props.comp.seduction}</td>
          </tr>
          <tr>
            <td>Soins</td>
            <td>{props.comp.soins}</td>
          </tr>
          <tr>
            <td>Survie</td>
            <td>{props.comp.survie}</td>
          </tr>
        </tbody>
      </Table>
    </View>
  );
};

export default Comp;
