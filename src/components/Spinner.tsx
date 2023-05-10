import { Spinner as Loading, Center } from "native-base";

export function Spinner() {
  return (
    <Center flex={1} backgroundColor="gray.700">
      <Loading color="green.500" />
    </Center>
  );
}
