import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgroundImg from "../assets/background.png";
import LogoSvg from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Platform } from "react-native";

export function SignUp() {
  return (
    <ScrollView
      scrollEnabled={Platform.OS === "ios" ? false : true}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} backgroundColor="gray.700" px={10}>
        <Image
          source={BackgroundImg}
          alt="Pessoas Treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Criar e Acessar" />
        </Center>

        <Button title="Voltar para o Login" variant="outline" mt={24}/>
      </VStack>
    </ScrollView>
  );
}
