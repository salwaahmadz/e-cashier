import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import { getDatabase, ref, child, get } from "firebase/database";
import FIREBASE from "../config/Firebase";

const database = getDatabase(
  FIREBASE,
  "https://ecashier-999ef-default-rtdb.asia-southeast1.firebasedatabase.app/"
);

const groupItemsByCategory = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    if (groupedData[item.kategori]) {
      groupedData[item.kategori].push(item);
    } else {
      groupedData[item.kategori] = [item];
    }
  });

  return groupedData;
};

const renderItems = ({ item }) => (
  <Card style={styles.cardContainer} containerStyle={{ borderRadius: 8 }}>
    <Text style={styles.itemTitle}>{item.namaMenu}</Text>
    <Text>Rp{item.hargaMenu}</Text>
  </Card>
);

const renderCategory = ({ item }) => (
  <View>
    <Text style={styles.heading}>{item.category}</Text>
    <FlatList
      data={item.items}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const HomeScreen = ({ navigation }) => {
  
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const menuRef = ref(database, "Menu");
    get(menuRef).then((snapshot) => {
      if (snapshot.exists()) {
        const menuData = [];
        snapshot.forEach((childSnapshot) => {
          const menuItem = childSnapshot.val();
          menuData.push({ id: childSnapshot.key, ...menuItem });
        });
        setMenu(menuData);
      }
    });
  }, []);

  const groupedData = groupItemsByCategory(menu);
  const categoryData = Object.keys(groupedData).map((category) => ({
    category,
    items: groupedData[category],
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        renderItem={renderCategory}
        keyExtractor={(item) => item.category}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Tambah Menu")}
      >
        <Icon name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerMenu: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 24,
    marginLeft: 16,
    marginTop: 16,
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
  cardContainer: {
    marginVertical: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
