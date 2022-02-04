// Default imports :

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

// Components import

import ApiProvider from "./Components/commons/ApiProvider/ApiProvider.jsx";

// App

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
        <ScrollView>
          <ApiProvider />
        </ScrollView>
    </SafeAreaView>
  );
}
