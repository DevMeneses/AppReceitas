import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles.js";

import Logo from "../../components/Logo/index.js";
import { useState, useEffect } from "react";

import api from "../../services/api.js";
import FoodList from '../../components/FoodList'

export default function Home() {
  const [inputValue, SetInputValue] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("/foods");
      setFoods(response.data)
    }

    fetchApi();
  }, []);

  function handleSearch() {
    console.log("Clicou");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          onChangeText={(text) => SetInputValue(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4cbe6c" />
        </TouchableOpacity>
      </View>

      <FlatList
      data={foods}
      keyExtractor={ (item) => String(item.id) }
      renderItem={ ({ item }) => <FoodList data={item}/>}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
