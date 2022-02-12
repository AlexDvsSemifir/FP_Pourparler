// Default imports :

import React, {useState} from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

// Components import

import ApiProvider from "./Components/commons/ApiProvider/ApiProvider.jsx";

// Fonts
import * as Font from "expo-font";
import useFonts from "./Hooks/useFonts.js";
import AppLoading from "expo-app-loading";

// App

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  } else {
    return (
      <SafeAreaView >
        <StatusBar hidden={true} />
        <ScrollView>
          <ApiProvider style={{fontFamily:'Handsnow'}}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
