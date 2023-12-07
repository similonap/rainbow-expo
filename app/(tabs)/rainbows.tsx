import { View, Text, ScrollView, FlatList, Pressable } from "react-native";
import { rainbow } from "rainbow-colors-array-ts";
import { Link } from "expo-router";

interface RainbowLineProps {
    color: string
}

function RainbowLine({color} : RainbowLineProps) {
    return (
        <Link href={{
            pathname: "[color]",
            params: { color: color }
        }} asChild>
            <Pressable>
                <View style={{backgroundColor: color, height: 100}}></View>
            </Pressable>
        </Link>
    )
}

export default function Rainbows() {
    const colors = rainbow(100, "hex", false);

    return (
        <View>
            <FlatList
                data={colors}
                renderItem={({item}) => <RainbowLine color={item.hex}/>}
                keyExtractor={item => item.hex}/>

        </View>

    )
}