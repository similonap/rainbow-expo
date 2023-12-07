import { View, Text, ScrollView, FlatList } from "react-native";
import { rainbow } from "rainbow-colors-array-ts";

interface RainbowLineProps {
    color: string
}

function RainbowLine({color} : RainbowLineProps) {
    return (
        <View style={{backgroundColor: color, height: 100}}></View>
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