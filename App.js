import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";


function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);
 
function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailsScreen", { ...item })}
      >
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </TouchableOpacity>
    );
  }

  

function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },
    ]);
  }


function resetColor() {
    setColorArray([]);
  }
 
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={addColor}
        >

        <Text style={{ color: "blue" }}>Add colour</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetColor}
        >

        <Text style={{ color: "green" }}>Reset colour</Text>
      </TouchableOpacity>


      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
    </View>
  );

}


function DetailsScreen({ route }) {
    // Destructure this object so we don't have to type route.params.red etc
    const { red, green, blue } = route.params;
   
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
        ]}
      >
        <View style={{ padding: 30 }}>
          <Text style={styles.detailText}>Red: {red}</Text>
          <Text style={styles.detailText}>Green: {green}</Text>
          <Text style={styles.detailText}>Blue: {blue}</Text>
        </View>
      </View>
    );
   }
   

const Stack = createStackNavigator();

  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Colour List" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    width: "100%",
  },

  detailText: {
    fontSize: 24,
    marginBottom: 20,
  },

 addButton: {
  height: 50,
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  padding: 5,
  margin: 12,
  borderRadius: 5,
  justifyContent: "center", 
  backgroundColor: "azure", 
  borderWidth: "3", 
},

resetButton: {
  height: 50,
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  padding: 5,
  margin: 12,
  borderRadius: 5,
  justifyContent: "center", 
  backgroundColor: "azure", 
  borderWidth: "3", 
},

});









 














