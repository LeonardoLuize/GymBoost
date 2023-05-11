import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ExerciseCardProps extends TouchableOpacityProps {}

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: "https://blog.lionfitness.com.br/wp-content/uploads/2018/10/Blog-11-1.jpg",
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
        />
        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            Supino
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            4 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
