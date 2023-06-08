import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import TambahMenuData from "./TambahMenuData";
import { getDatabase, ref, push, set } from "firebase/database";
import FIREBASE from "../config/Firebase";

const TambahMenu = ({ navigation }) => {
  const [namaMenu, setNamaMenu] = useState("");
  const [kategori, setKategori] = useState("");
  const [hargaMenu, setHargaMenu] = useState("");

  const database = getDatabase(
    FIREBASE,
    "https://ecashier-999ef-default-rtdb.asia-southeast1.firebasedatabase.app/"
  );

  const onChangeText = (stateName, value) => {
    switch (stateName) {
      case "namaMenu":
        setNamaMenu(value);
        break;
      case "kategori":
        setKategori(value);
        break;
      case "hargaMenu":
        setHargaMenu(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (namaMenu && kategori && hargaMenu) {

      const price = parseFloat(hargaMenu)

      const menuRef = ref(database, "Menu");
      const newMenuRef = push(menuRef);
      const newMenu = {
        namaMenu: namaMenu,
        kategori: kategori,
        hargaMenu: hargaMenu,
      };

      set(newMenuRef, newMenu)
        .then(() => {
          Alert.alert("Sukses", "Sukses menambahkan menu baru");
          console.log("Submitted");
          setNamaMenu("");
          setKategori("");
          setHargaMenu("");
          navigation.replace("Menu");
        })
        .catch((Error) => {
          Alert.alert("Gagal", "Gagal menambahkan menu: ", error);
          console.log("Submit Failed");
        });
      // const menuRef = ref(database, "Menu");
      // const newMenuRef = push(menuRef);

      // set(newMenuRef, newMenu)
      //   .then(() => {
      //     Alert.alert("Sukses", "Sukses menambahkan menu: " + namaMenu);
      //     console.log("Submitted");
      //     setNamaMenu("");
      //     setKategori("");
      //     setHargaMenu("");
      //   })
      //   .catch((error) => {
      //     Alert.alert("Gagal", "Gagal menambahkan menu: " + error);
      //     console.log("Submit Failed");
      //   });
    } else {
      Alert.alert("Pengumuman", "Lengkapi semua data yang diperlukan");
    }
  };

  return (
    <View style={styles.container}>
      <TambahMenuData
        label="Nama Menu"
        placeholder="Masukkan nama menu"
        onChangeText={onChangeText}
        stateName="namaMenu"
        value={namaMenu}
      />
      <TambahMenuData
        label="Kategori"
        placeholder="Masukkan kategori"
        onChangeText={onChangeText}
        stateName="kategori"
        value={kategori}
      />
      <TambahMenuData
        label="Harga"
        placeholder="Masukkan harga"
        keyboardType="number-pad"
        onChangeText={onChangeText}
        stateName="hargaMenu"
        value={hargaMenu}
      />
      <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
        <Text style={styles.textButton}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  addButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 5,
    marginVertical: 8,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default TambahMenu;
