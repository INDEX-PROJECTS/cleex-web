import { memo } from "react";
import clsx from "clsx";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { VStack } from "@/shared/ui/Stack";
import styles from "./ResetPasswordStep.module.scss";

interface ResetPasswordStepProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const ResetPasswordStep = memo((props: ResetPasswordStepProps) => {
  const { className, handleChangeStep } = props;
  return (
    <VStack
      max={true}
      className={clsx(styles.ResetPasswordStep, {}, [className])}>
      <Button
        onClick={() => {
          return handleChangeStep(2);
        }}
        theme={ThemeButton.DEFAULT}>
        Продолжить
      </Button>
    </VStack>
  );
});
