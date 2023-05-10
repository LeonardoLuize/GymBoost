import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg="green.700"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
