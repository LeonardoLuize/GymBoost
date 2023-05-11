import { VStack } from "native-base";
import { HistoryCard } from "../components/HistoryCard";
import { ScreenHeader } from "../components/ScreenHeader";

export function History(){
    return(
        <VStack>
            <ScreenHeader title="Histórico de exercícios" />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
        </VStack>
    )
}