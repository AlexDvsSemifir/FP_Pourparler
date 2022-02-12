import { View, Text, Pressable, Image, StyleSheet, Alert } from "react-native";
import React, { useContext, useState, useEffect } from "react";

// Context :
import {
  playerContext,
  setPlayerContext,
  refreshContext,
  updatePlayerContext,
} from "../commons/ApiProvider/ApiProvider";

const HealthButton = (props) => {
  const player = useContext(playerContext);
  const setPlayer = useContext(setPlayerContext);
  const refresh = useContext(refreshContext);
  const updatePlayer = useContext(updatePlayerContext);

  const index = props.index;
  const pv = props.pv;

  const handleHealPress = () => {
    let newPvValue = 0;
    newPvValue = pv - 1;
    if (newPvValue < 1) {
      removeWound()
    } else {
      player.wounds[index].pv = newPvValue;
      let hpUpdate = updateTotalPV();
      player.hp = hpUpdate;
      setPlayer({
        ...player,
      });
      updatePlayer(player);
      refresh;
    }
  };

  const removeWound = () => {
    player.wounds.splice(index, 1);
    let hpUpdate = updateTotalPV();
    player.hp = hpUpdate;
    setPlayer({
      ...player,
    });
    updatePlayer(player);
    refresh;
  };

  const updateTotalPV = () => {
    let total = 0;
    player.wounds.map((item, index) => {
      total = total + item.pv;
    });
    let maxHP = player.hp.max;
    if (total > maxHP) {
      total = 0;
    } else {
      total = maxHP - total;
    }
    let hpUpdate = { current: total, max: maxHP };
    return hpUpdate;
  };

  const handleLongPress = () => {
    Alert.alert('Soigner', 'Soigner la plaie ?', [
      {
        text: 'Non'
      },
      {
        text: 'Oui', onPress : removeWound
      }
    ], {
      cancelable: true
    })
  };

  return (
    <View>
      <Pressable onPress={handleHealPress} onLongPress={handleLongPress}>
        <Image
          source={require("../../src/icons/heal.png")}
          style={styles.healImage}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  healImage: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});

export default HealthButton;
