import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Spinner } from "./src/components/Spinner";
import { theme } from "./src/theme";
import { SignUp } from "./src/screens/SignUp";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <SignUp /> : <Spinner />}
    </NativeBaseProvider>
  );
}
