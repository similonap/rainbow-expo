import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ColorScreen() {
    const { color } = useLocalSearchParams<{color: string}>();
    const colorDecoded = decodeURIComponent(color!);
    return (
        <View style={{backgroundColor: colorDecoded, flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 32}}>{colorDecoded}</Text>

            <Stack.Screen options={{title: colorDecoded}}/>

            
        </View>
    )
}