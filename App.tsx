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
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <SignIn /> : <Spinner />}
    </NativeBaseProvider>
  );
}
