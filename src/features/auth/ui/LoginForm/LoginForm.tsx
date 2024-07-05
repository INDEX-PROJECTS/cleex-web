import { memo, useState } from "react";
import clsx from "clsx";
import { Input } from "@/shared/ui/Input/Input";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import styles from "./LoginForm.module.scss";
import type { ChangeEvent } from "react";

interface LoginFormProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, handleChangeStep } = props;

  const [check, setCheck] = useState(false);

  const [password, setPassword] = useState("");

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  return (
    <VStack
      max={true}
      justify="between"
      gap="16"
      className={clsx(styles.LoginForm, {}, [className])}>
      <VStack
        gap="16"
        max={true}>
        <Input
          autoFocus={true}
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
        />

        <Input
          placeholder="Пароль"
          isPassword={true}
          value={password}
          onChange={onChangeNewPassword}
        />
      </VStack>

      <VStack
        gap="16"
        max={true}>
        <HStack
          max={true}
          align="center"
          justify="between">
          <Checkbox
            label="Запомнить пароль"
            checked={check}
            id="registrationCheck"
            onToggle={() => {
              return setCheck(!check);
            }}
          />

          <Button
            onClick={() => {
              return handleChangeStep(3);
            }}
            theme={ThemeButton.LINK}>
            Забыли пароль?
          </Button>
        </HStack>

        <Button
          fullWidth={true}
          theme={ThemeButton.DEFAULT}>
          Войти
        </Button>
      </VStack>
    </VStack>
  );
});
