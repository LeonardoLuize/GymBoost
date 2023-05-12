import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import BodySvg from "../assets/body.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={8}
          mb={6}
        >
          <Heading flexShrink={1} color="gray.100" fontSize="lg">
            Supino
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Biceps
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
