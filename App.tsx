import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <View style={{ backgroundColor: "#202024" }}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Text>Hello!</Text> : <></>}
    </View>
  );
}
