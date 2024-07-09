/* eslint-disable default-case */
import { memo, useCallback, useState } from "react";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { VStack } from "@/shared/ui/Stack";
import styles from "./LoginRegistrationStep.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import type { TabItem } from "@/shared/ui/Tabs/Tabs";

interface LoginRegistrationStepProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

const tabs: TabItem[] = [
  { value: "Вход", content: "Вход" },
  { value: "Регистрация", content: "Регистрация" },
];

export const LoginRegistrationStep = memo(
  (props: LoginRegistrationStepProps) => {
    const { className, handleChangeStep } = props;

    const [activeTab, setActiveTab] = useState("Вход");

    const [slideIn, setSlideIn] = useState(true);

    const onTabClick = useCallback((tab: TabItem) => {
      setSlideIn(false);

      setTimeout(() => {
        setActiveTab(tab.value);
        setSlideIn(true);
      }, 300);
    }, []);

    const renderForm = useCallback((value: string) => {
      switch (value) {
        case "Вход":
          return <LoginForm handleChangeStep={handleChangeStep} />;

        case "Регистрация":
          return <RegistrationForm handleChangeStep={handleChangeStep} />;
      }
    }, []);

    return (
      <VStack
        gap="24"
        max={true}
        className={clsx(styles.LoginRegistrationStep, {}, [className])}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabClick={onTabClick}
        />

        <CSSTransition
          in={slideIn}
          timeout={300}
          unmountOnExit={true}
          classNames="slide-animation">
          {renderForm(activeTab)}
        </CSSTransition>
      </VStack>
    );
  },
);
