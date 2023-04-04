import { useLayoutEffect } from "react";

import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

import { useRoute, useNavigation } from "@react-navigation/native";

import { Entypo } from '@expo/vector-icons'

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
   
    navigation.setOptions({
        title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
        headerRight: () => (
            <Pressable onPress={ () => console.log("Teste")}>
            <Entypo name="heart" color='#ff4141' size={28}/>
            </Pressable>
        )
    })

  }, [navigation, route.params?.data])

  return (
    <View>
      <Text>{route.params?.data.name}</Text>
    </View>
  );
}
