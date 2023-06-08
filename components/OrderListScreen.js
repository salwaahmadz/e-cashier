import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

const OrderListScreen = () => (
  <View style={styles.container}>
    <Card>
      <Text>Order 1</Text>
    </Card>

    <Card>
      <Text>Order 2</Text>
    </Card>

    <TouchableOpacity style={styles.addButton}>
      <Icon name="plus" size={24} color="#FFF" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 24,
    right: 32,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
});

export default OrderListScreen;
