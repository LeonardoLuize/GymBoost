import { Input as InputNativeBase, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <InputNativeBase
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      marginBottom={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: "1px",
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
