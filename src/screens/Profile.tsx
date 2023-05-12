import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ScreenHeader } from "../components/ScreenHeader";
import { UserPhoto } from "../components/UserPhoto";

const PHOTO_SIZE = 33;

export function Profile() {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <VStack flex={1}>
          <Center mt={6} px={10}>
            {isLoading ? (
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.300"
                endColor="gray.500"
              />
            ) : (
              <UserPhoto
                size={PHOTO_SIZE}
                source={{ uri: "https://github.com/LeonardoLuize.png" }}
                alt="Foto do usuário"
              />
            )}

            <TouchableOpacity>
              <Text
                color="green.500"
                fontWeight="bold"
                fontSize="md"
                mt={2}
                mb={8}
              >
                Alterar foto
              </Text>
            </TouchableOpacity>

            <Input placeholder="Nome" bg="gray.600" />
            <Input value="leonardo@gmail.com" bg="gray.600" isDisabled />
          </Center>
        </VStack>
        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2} mt={12}>
            Alterar Senha
          </Heading>
          <Input placeholder="Senha Atual" bg="gray.600" secureTextEntry />
          <Input placeholder="Senha Nova" bg="gray.600" secureTextEntry />
          <Input placeholder="Confirmar Senha" bg="gray.600" secureTextEntry />
          <Button title="Salvar" mt={4} />
        </VStack>
      </ScrollView>
    </>
  );
}
