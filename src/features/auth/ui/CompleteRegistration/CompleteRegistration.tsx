import { memo, useState } from "react";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Input } from "@/shared/ui/Input/Input";
import { Text, TextVariant } from "@/shared/ui/Text/Text";
import { PasswordStrength } from "@/shared/ui/PasswordStrength/PasswordStrength";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import styles from "./CompleteRegistration.module.scss";
import type { ChangeEvent } from "react";

interface CompleteRegistrationProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const CompleteRegistration = memo((props: CompleteRegistrationProps) => {
  const { className, handleChangeStep } = props;

  const [meter, setMeter] = useState(false);
  const [password, setPassword] = useState("");

  const [check, setCheck] = useState(false);

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <VStack
      max={true}
      justify="between"
      className={clsx(styles.CompleteRegistration, {}, [className])}>
      <VStack
        max={true}
        gap="24">
        <Text
          gap="0"
          text="Регистрация"
          textPrimary={true}
          variant={TextVariant.TITLE}
        />

        <VStack
          max={true}
          gap="16">
          <Input placeholder="Имя пользователя" />

          <HStack
            max={true}
            className={styles.passwordWrapper}>
            <Input
              placeholder="Пароль"
              isPassword={true}
              value={password}
              onBlur={() => {
                return setMeter(false);
              }}
              onFocus={() => {
                return setMeter(true);
              }}
              onChange={onChangeNewPassword}
            />
            <CSSTransition
              in={meter}
              timeout={300}
              unmountOnExit={true}
              classNames="slide-animation">
              <PasswordStrength
                password={password || ""}
                className={styles.passwordPosition}
              />
            </CSSTransition>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        max={true}
        gap="16">
        <Checkbox
          label="Я согласен(-на) с лицензионным соглашением"
          checked={check}
          id="registrationCheck"
          onToggle={() => {
            return setCheck(!check);
          }}
        />
        <Button
          onClick={() => {
            return handleChangeStep(0);
          }}
          fullWidth={true}
          theme={ThemeButton.DEFAULT}>
          Зарегистрироваться
        </Button>
      </VStack>
    </VStack>
  );
});
