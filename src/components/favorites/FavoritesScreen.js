import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../res/Colors";
import FavoritesEmptyState from "./FavoritesEmprtyState";

class FavoritesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FavoritesEmptyState />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
})
export default FavoritesScreen;
