// React Imports :
import React, {useContext} from "react";
import { Text, View, StyleSheet } from "react-native";

// Context :

import { playerContext } from "../commons/ApiProvider/ApiProvider";

const PlayerIdentity = () => {
    let bio = useContext(playerContext)
    bio = bio.bio
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{bio.firstName} {bio.lastName}</Text>
        <Text style={styles.surname}>"{bio.surname}"</Text>

    </View>
  );
};

export default PlayerIdentity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    name: {
        fontSize: 60,
        fontFamily: 'Handsnow'
    },
    surname: {
        fontSize: 30,
        fontFamily: 'Handsnow'
    }
})
