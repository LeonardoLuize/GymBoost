import { useNavigation } from "@react-navigation/native";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { Group } from "../components/Group";
import { HomeHeader } from "../components/HomeHeader";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costas");
  const [groups, setGroups] = useState([
    "costas",
    "ombro",
    "biceps",
    "triceps",
  ]);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  const [exercises, setExercises] = useState([
    {
      name: "Supino",
    },
    {
      name: "Puxada Frente",
    },
    {
      name: "Triceps Corda",
    },
    {
      name: "Supino Inclinado",
    },
    {
      name: "Leg Press",
    },
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={handleOpenExerciseDetails}
              name={item.name}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
