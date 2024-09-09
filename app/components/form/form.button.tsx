import { Button, ButtonProps } from "tamagui";

type FormButtonProps = {
  label: string;
} & ButtonProps;

export default function FormButton({ label, ...props }: FormButtonProps) {
  return (
    <Button fontSize="14" color="$white" fontFamily="OpenSansBold" {...props}>
      {label}
    </Button>
  );
}
