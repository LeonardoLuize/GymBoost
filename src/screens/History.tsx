import { Heading, VStack, SectionList, Text } from "native-base";
import { useState } from "react";
import { HistoryCard } from "../components/HistoryCard";
import { ScreenHeader } from "../components/ScreenHeader";

export function History() {
  const [historyData, setHistory] = useState([
    {
      title: "20.03.22",
      data: ["Supino", "Puxada Frontal"],
    },
    {
      title: "23.03.22",
      data: ["Supino", "Puxada Frontal", "Triceps"],
    },
    {
      title: "23.03.23",
      data: ["Supino", "Puxada Frontal", "Triceps"],
    },
    {
      title: "23.05.23",
      data: ["Supino", "Puxada Frontal", "Triceps"],
    },
  ]);

  return (
    <VStack>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={historyData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            pt={10}
            pb={3}
            bg="gray.700"
            flex={1}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          historyData.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. Vamos fazer exercícios hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
