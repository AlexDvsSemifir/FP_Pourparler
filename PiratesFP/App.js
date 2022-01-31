// Default imports :

import { StatusBar } from "expo-status-bar";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Text, View } from "react-native";


// Components import

import ApiProvider from "./Components/commons/ApiProvider/ApiProvider.jsx";

// App

export default function App() {

  return (
    <View>
      <ApiProvider />
      <StatusBar style="auto" />
    </View>
  );
}
