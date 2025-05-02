import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ActionCard from "./components/ActionCard";
import ElivatedCards from "./components/ElivatedCards";
import FancyCard from "./components/FancyCard";
import FlatCards from "./components/FlatCards";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElivatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
