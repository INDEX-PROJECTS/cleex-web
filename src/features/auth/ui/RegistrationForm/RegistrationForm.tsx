import { memo } from "react";
import clsx from "clsx";
import { Input } from "@/shared/ui/Input/Input";
import { VStack } from "@/shared/ui/Stack";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import styles from "./RegistrationForm.module.scss";

interface RegistrationFormProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, handleChangeStep } = props;
  return (
    <VStack
      max={true}
      gap="16"
      justify="between"
      className={clsx(styles.RegistrationForm, {}, [className])}>
      <Input
        mask="+7 (999) 999-99-99"
        placeholder="+7 (___) ___-__-__"
      />
      <Button
        onClick={() => {
          return handleChangeStep(1);
        }}
        fullWidth={true}
        theme={ThemeButton.DEFAULT}>
        Продолжить
      </Button>
    </VStack>
  );
});
