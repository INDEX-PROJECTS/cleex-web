import { memo } from "react";
import clsx from "clsx";
import { VStack } from "@/shared/ui/Stack";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { Text, TextAlign, TextVariant } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import styles from "./CodeStep.module.scss";

interface CodeStepProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const CodeStep = memo((props: CodeStepProps) => {
  const { className, handleChangeStep } = props;
  return (
    <VStack
      max={true}
      justify="between"
      align="center"
      className={clsx(styles.CodeStep, {}, [className])}>
      <VStack
        max={true}
        gap="24">
        <Text
          gap="0"
          text="Код подтверждения"
          textPrimary={true}
          variant={TextVariant.TITLE}
        />

        <Text
          gap="0"
          text="Введите последние 4 цифры номера позвонившего на + 7 (951) 122-32-81"
          textPrimary={true}
          align={TextAlign.CENTER}
          variant={TextVariant.SUBTITLE}
        />

        <Input
          placeholder="••••"
          maskChar="•"
          mask="9999"
          code={true}
        />
      </VStack>

      <VStack
        max={true}
        gap="16">
        <Button
          fullWidth={true}
          theme={ThemeButton.LINK}>
          Позвонить еще раз
        </Button>
        <Button
          onClick={() => {
            return handleChangeStep(2);
          }}
          fullWidth={true}
          theme={ThemeButton.DEFAULT}>
          Продолжить
        </Button>
      </VStack>
    </VStack>
  );
});
