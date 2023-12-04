import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, StyleProp, ViewStyle, TextInput } from "react-native";
import { rainbow } from "rainbow-colors-array-ts";

interface RainbowProps {
  containerStyle: StyleProp<ViewStyle>;
  lineStyle: StyleProp<ViewStyle>;
  colors: string[];
}

function Rainbow({containerStyle, lineStyle, colors} : RainbowProps) {

  return (
    <View style={containerStyle}>
      {colors.map(color => <View key={color} style={[{backgroundColor: color}, lineStyle]}></View>)}
    </View>
  )
}

interface LetterProps {
  letter: string;
  color: string;
}

function Letter({letter, color} : LetterProps) {
  return (
    <Text style={{color: color, fontSize: 24}}>{letter}</Text>
  )
}

interface FooterProps {
  text: string;
  pastel: boolean;
}

function Footer({text, pastel} : FooterProps) {
  const rainbowText = text.slice(0,10);
  const colors = rainbow(rainbowText.length, "hex", pastel);

  return (
    <View style={{height: 100, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      {
        rainbowText.split("").map((letter, index) => <Letter key={index} color={colors[index].hex} letter={letter}/>)
      }
    </View>
  )
}

export default function App() {
  const [rainbowText, setRainbowText] = useState("rainbow");
  const [rainbowOrder, setRainbowOrder] = useState([0,1,2,3,4,5]);
  const [pastel, setPastel] = useState(false);

  const colors = rainbow(6, "hex", pastel).map(color => color.hex);
  const rainbowColors = rainbowOrder.map((i)=> colors[i])

  function randomize() {
    setRainbowOrder([...rainbowOrder].sort(() => Math.random() - 0.5));
  }

  return (
    <View style={styles.container}>
      <Rainbow colors={rainbowColors} containerStyle={{}} lineStyle={{height: 10}}/>
      <TextInput style={{borderWidth: 1, padding: 5}} onChangeText={(text) => setRainbowText(text)} value={rainbowText}/>
      <Button title="SET PASTEL" onPress={() => setPastel(pastel => !pastel)}/>
      <Button title="RANDOMIZE COLORS" onPress={randomize}/>
      <View style={{flex: 1, flexDirection: "row"}}>
        <Rainbow colors={rainbowColors} containerStyle={{flex: 1, flexDirection: "row", justifyContent: "space-around"}} lineStyle={{width: 10}}/>
        <Rainbow colors={rainbowColors} containerStyle={{flex: 1, justifyContent: "space-around", alignItems: "center"}} lineStyle={{width: 50, height: 50}}/>
      </View>
      <Footer text={rainbowText} pastel={pastel}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
