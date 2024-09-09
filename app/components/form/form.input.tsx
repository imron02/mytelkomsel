import { Input, Text, YStack } from "tamagui";

type FormInputProps = {
  placeholder: string;
  label: string;
};
export default function FormInput(props: FormInputProps) {
  return (
    <YStack gap="$2">
      <Text fontSize="14" fontFamily="OpenSansBold">
        {props.label}
      </Text>
      <Input
        placeholder={props.placeholder}
        borderColor="$greyWhite"
        borderRadius="$1.5"
        backgroundColor="$white"
        fontSize="14"
      />
    </YStack>
  );
}
