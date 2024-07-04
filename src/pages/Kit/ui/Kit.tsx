"use client";

/* eslint-disable import/no-internal-modules */
import React, { useCallback, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.svg";
import { Input } from "@/shared/ui/Input/Input";
import CloseIcon from "@/shared/assets/icons/CloseIcon.svg";
import ArrowBackIcon from "@/shared/assets/icons/ArrowIcon.svg";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Loader, ThemeLoader } from "@/shared/ui/Loader/Loader";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text, TextVariant } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { PasswordStrength } from "@/shared/ui/PasswordStrength/PasswordStrength";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { RangeInput } from "@/shared/ui/RangeInput/RangeInput";
import { Toggle } from "@/shared/ui/Toggle/Toggle";
import styles from "./Kit.module.scss";
import type { ChangeEvent } from "react";
import type { TabItem } from "@/shared/ui/Tabs/Tabs";

const tabs: TabItem[] = [
  { value: "Логин", content: "Логин" },
  { value: "Регистрация", content: "Регистрация" },
];
const Kit = () => {
  const [check, setCheck] = useState(false);
  const [meter, setMeter] = useState(false);

  const [height, setHeight] = useState(100);

  const [password, setPassword] = useState("");

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeHeight = (event: ChangeEvent<HTMLInputElement>) => {
    const validateValue = event.currentTarget.value.replace(/\D+/gm, "");
    setHeight(Number(validateValue));
  };
  const [activeTab, setActiveTab] = useState("Логин");

  const onTabClick = useCallback((tab: TabItem) => {
    setActiveTab(tab.value);
  }, []);

  const onChangeHandle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newHandle = event.currentTarget.checked ? true : false;

    return newHandle;
  }, []);

  return (
    <VStack
      gap="50"
      align="start"
      max={true}
      className={styles.kit}>
      <VStack
        gap="50"
        wrap={true}
        align="start"
        max={true}>
        <VStack
          align="start"
          max={true}
          gap="32">
          <Text
            gap="16"
            isActive={true}
            title="tittle — 30 Bold"
            variant={TextVariant.TITLE}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.TITLE}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="subtittle — 22 Medium"
            variant={TextVariant.SUBTITLE}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.SUBTITLE}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="description-medium — 18 Medium"
            variant={TextVariant.DESCRIPTION_MEDIUM}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.DESCRIPTION_MEDIUM}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="description-regular — 18 Regular"
            variant={TextVariant.DESCRIPTION_REGULAR}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.DESCRIPTION_REGULAR}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="main-medium — 16 Medium"
            variant={TextVariant.MAIN_MEDIUM}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.MAIN_MEDIUM}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="main-regular — 16 Regular"
            variant={TextVariant.MAIN_REGULAR}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.MAIN_REGULAR}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="additional — 15 Regular"
            variant={TextVariant.ADDITIONAL}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.ADDITIONAL}
          />
        </VStack>
        <VStack
          max={true}
          align="start"
          gap="50">
          <Text
            gap="16"
            isActive={true}
            title="minimum — 14 Regular"
            variant={TextVariant.MINIMUM}
          />
          <Text
            gap="16"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            variant={TextVariant.MINIMUM}
          />
        </VStack>
      </VStack>
      <Text
        gap="0"
        title="Buttons"
        variant={TextVariant.SUBTITLE}
      />
      <HStack
        gap="32"
        max={true}>
        <Button theme={ThemeButton.SECONDARY}>Secondary</Button>
        <Button theme={ThemeButton.DEFAULT}>Default</Button>

        <Button theme={ThemeButton.CLEAR}>Clear</Button>

        <Button theme={ThemeButton.ICON}>
          <ProfileIcon />
        </Button>

        <Button theme={ThemeButton.ICON_BG}>
          <CloseIcon />
        </Button>

        <Button theme={ThemeButton.LINK}>Забыли пароль?</Button>

        <HStack
          justify="center"
          align="center"
          className={styles.bg_main}>
          <Button theme={ThemeButton.BACK}>
            <ArrowBackIcon />
            Назад
          </Button>
        </HStack>
      </HStack>

      <Text
        gap="0"
        title="Links"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        max={true}
        gap="32">
        <AppLink
          href="#"
          theme={AppLinkTheme.MAIN}>
          Main link
        </AppLink>

        <AppLink
          href="#"
          theme={AppLinkTheme.GRAY}>
          Gray link
        </AppLink>
      </HStack>

      <Text
        gap="0"
        title="Range Input"
        variant={TextVariant.SUBTITLE}
      />

      <HStack max={true}>
        <RangeInput
          title="Высота, мм"
          max={2000}
          min={400}
          step={1}
          value={height}
          onChange={onChangeHeight}
        />
      </HStack>

      <Text
        gap="0"
        title="Switcher"
        variant={TextVariant.SUBTITLE}
      />

      <HStack max={true}>
        <Toggle onChange={onChangeHandle} />
      </HStack>

      <Text
        gap="0"
        title="Inputs"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        gap="32"
        max={true}>
        <Input
          placeholder="+7 (___) ___-__-__"
          mask="+7 (999) 999-99-99"
        />
        <Input
          placeholder="••••"
          maskChar="•"
          mask="9999"
          code={true}
        />

        <HStack className={styles.passwordWrapper}>
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
      </HStack>

      <Text
        gap="0"
        title="Checkboxes"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        gap="32"
        max={true}>
        <Checkbox
          label="Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением"
          checked={check}
          id="registrationCheck"
          onToggle={() => {
            return setCheck(!check);
          }}
        />
      </HStack>

      <Text
        gap="0"
        title="Tabs"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        gap="32"
        max={true}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabClick={onTabClick}
        />
      </HStack>

      <Text
        gap="0"
        title="Loaders"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        gap="32"
        max={true}>
        <Button theme={ThemeButton.DEFAULT}>
          <Loader theme={ThemeLoader.BTN_LOADER} />
        </Button>
      </HStack>

      <Text
        gap="0"
        title="Skeletons"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        gap="32"
        max={true}>
        <HStack
          justify="start"
          gap="16">
          <Skeleton
            border="50%"
            flex={false}
            width={50}
            height={50}
          />

          <VStack
            gap="4"
            max={true}>
            <Skeleton
              width={200}
              height={10}
              border="5px"
            />
            <Skeleton
              width={200}
              height={10}
              border="5px"
            />
          </VStack>
        </HStack>

        <VStack
          justify="start"
          gap="16">
          <Skeleton
            border="20px"
            flex={false}
            width={200}
            height={100}
          />

          <VStack
            gap="4"
            max={true}>
            <Skeleton
              width={200}
              height={10}
              border="5px"
            />
            <Skeleton
              width={200}
              height={10}
              border="5px"
            />
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Kit;
