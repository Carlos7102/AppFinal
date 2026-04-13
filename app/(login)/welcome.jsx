import { View, Text, TouchableOpacity } from "react-native"
import { router } from "expo-router"
export default function Welcome(){
    return(
        <View>
            <TouchableOpacity onPress={() => router.push(`/(tabs)/home`)}>
                <Text>mmmmmm</Text>
            </TouchableOpacity>
        </View>
    )
}