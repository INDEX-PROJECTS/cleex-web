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
import AnnouncementsGrid from "@/shared/ui/AnnouncementsGrid/AnnouncementsGrid.tsx";
import { AnnouncementCard } from "@/entities/announcement";
import { Modal } from "@/shared/ui/Modal/Modal";
import Avatar, { AvatarSize } from "@/shared/ui/Avatar/Avatar.tsx";
import { Stars } from "@/shared/ui/Stars/Stars";
import { RadioButton } from "@/shared/ui/RadioButton/RadioButton";
import styles from "./Kit.module.scss";
import type { TabItem } from "@/shared/ui/Tabs/Tabs";
import type { ChangeEvent } from "react";

const tabs: TabItem[] = [
  { value: "Логин", content: "Логин" },
  { value: "Регистрация", content: "Регистрация" },
];
const Kit = () => {
  const [check, setCheck] = useState(false);
  const [meter, setMeter] = useState(false);

  const [modal, setModal] = useState(false);

  const [height, setHeight] = useState(100);

  const [password, setPassword] = useState("");

  const onCloseModal = () => {
    setModal(false);
  };

  const onOpenModal = () => {
    setModal(true);
  };

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
        title="Modal window"
        variant={TextVariant.SUBTITLE}
      />

      <HStack
        gap="32"
        max={true}>
        <Button
          onClick={onOpenModal}
          theme={ThemeButton.DEFAULT}>
          Open modal window
        </Button>
        <Modal
          isOpen={modal}
          onClose={onCloseModal}>
          <VStack
            gap="32"
            max={true}>
            <Text
              gap="0"
              title="Modal window title"
              variant={TextVariant.TITLE}
            />
            <Text
              gap="0"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              variant={TextVariant.MAIN_REGULAR}
            />
            <Button
              onClick={onCloseModal}
              theme={ThemeButton.DEFAULT}>
              Close modal window
            </Button>
          </VStack>
        </Modal>
      </HStack>

      <VStack>
        <Text
          gap="0"
          title="Grid wrapper"
          variant={TextVariant.TITLE}
        />
        <AnnouncementsGrid>
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011 в идеальном состоянии"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            href="#"
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
        </AnnouncementsGrid>
      </VStack>

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

      <Text
        gap="0"
        title="Avatars"
        variant={TextVariant.SUBTITLE}
      />

      <VStack gap="16">
        <HStack gap="16">
          <Avatar
            name="Ян Юшков"
            size={AvatarSize.SIZE88}
          />
          <Avatar
            name="Ян Юшков"
            size={AvatarSize.SIZE64}
          />
          <Avatar
            name="Ян Юшков"
            size={AvatarSize.SIZE48}
            isOnline={true}
          />
          <Avatar
            name="Ян Юшков"
            size={AvatarSize.SIZE32}
            isOnline={true}
          />
        </HStack>
        <HStack gap="16">
          <Avatar
            name="Артём Шабанов"
            size={AvatarSize.SIZE88}
          />
          <Avatar
            name="Артём Шабанов"
            size={AvatarSize.SIZE64}
          />
          <Avatar
            name="Артём Шабанов"
            size={AvatarSize.SIZE48}
            isOnline={true}
          />
          <Avatar
            name="Артём Шабанов"
            size={AvatarSize.SIZE32}
            isOnline={true}
          />
        </HStack>
        <HStack gap="16">
          <Avatar
            name="Девушка какая-то"
            size={AvatarSize.SIZE88}
            imageUrl="https://s3-alpha-sig.figma.com/img/f261/eecd/2260bb04a4bd36bb15bb2eb3a8c4d512?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzTR09vnrQuviVyv3Xcgz5UCxOQ9voA-WSCgAjrMtYQssyTeJimREyf-CT7Ltn-cwuOqzOT5VZUt4jyZZpiecbhLIFh1oOeFYfd8NWMzR5h4XA7wa2VJVV9hyhF2e95R8aANlzTwy6-KFOtxWMIS0Q~ebDGWQ6ZjzCF8TVTzI1EoI85NjxsnrDaCPseQt8y3MzXQIncpkZ3wZrE75pwWXrXvFyDbx5NIZHRmBQEhOmS1kbYduTpJMp05PraxEtPUSjp8~gsh5MLtyHujaWjfR2T4XwdaHbeSonarQ4Y7KLZaIeRFbkigyt1J2vkBAhlOL6d88bECyQN32rlw6T4d6Q__"
          />
          <Avatar
            name="Девушка какая-то"
            size={AvatarSize.SIZE64}
            imageUrl="https://s3-alpha-sig.figma.com/img/f261/eecd/2260bb04a4bd36bb15bb2eb3a8c4d512?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzTR09vnrQuviVyv3Xcgz5UCxOQ9voA-WSCgAjrMtYQssyTeJimREyf-CT7Ltn-cwuOqzOT5VZUt4jyZZpiecbhLIFh1oOeFYfd8NWMzR5h4XA7wa2VJVV9hyhF2e95R8aANlzTwy6-KFOtxWMIS0Q~ebDGWQ6ZjzCF8TVTzI1EoI85NjxsnrDaCPseQt8y3MzXQIncpkZ3wZrE75pwWXrXvFyDbx5NIZHRmBQEhOmS1kbYduTpJMp05PraxEtPUSjp8~gsh5MLtyHujaWjfR2T4XwdaHbeSonarQ4Y7KLZaIeRFbkigyt1J2vkBAhlOL6d88bECyQN32rlw6T4d6Q__"
          />
          <Avatar
            name="Девушка какая-то"
            size={AvatarSize.SIZE48}
            isOnline={true}
            imageUrl="https://s3-alpha-sig.figma.com/img/f261/eecd/2260bb04a4bd36bb15bb2eb3a8c4d512?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzTR09vnrQuviVyv3Xcgz5UCxOQ9voA-WSCgAjrMtYQssyTeJimREyf-CT7Ltn-cwuOqzOT5VZUt4jyZZpiecbhLIFh1oOeFYfd8NWMzR5h4XA7wa2VJVV9hyhF2e95R8aANlzTwy6-KFOtxWMIS0Q~ebDGWQ6ZjzCF8TVTzI1EoI85NjxsnrDaCPseQt8y3MzXQIncpkZ3wZrE75pwWXrXvFyDbx5NIZHRmBQEhOmS1kbYduTpJMp05PraxEtPUSjp8~gsh5MLtyHujaWjfR2T4XwdaHbeSonarQ4Y7KLZaIeRFbkigyt1J2vkBAhlOL6d88bECyQN32rlw6T4d6Q__"
          />
          <Avatar
            name="Девушка какая-то"
            size={AvatarSize.SIZE32}
            isOnline={true}
            imageUrl="https://s3-alpha-sig.figma.com/img/f261/eecd/2260bb04a4bd36bb15bb2eb3a8c4d512?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzTR09vnrQuviVyv3Xcgz5UCxOQ9voA-WSCgAjrMtYQssyTeJimREyf-CT7Ltn-cwuOqzOT5VZUt4jyZZpiecbhLIFh1oOeFYfd8NWMzR5h4XA7wa2VJVV9hyhF2e95R8aANlzTwy6-KFOtxWMIS0Q~ebDGWQ6ZjzCF8TVTzI1EoI85NjxsnrDaCPseQt8y3MzXQIncpkZ3wZrE75pwWXrXvFyDbx5NIZHRmBQEhOmS1kbYduTpJMp05PraxEtPUSjp8~gsh5MLtyHujaWjfR2T4XwdaHbeSonarQ4Y7KLZaIeRFbkigyt1J2vkBAhlOL6d88bECyQN32rlw6T4d6Q__"
          />
        </HStack>
      </VStack>

      <Text
        gap="0"
        title="Stars Rating"
        variant={TextVariant.SUBTITLE}
      />

      <VStack
        gap="16"
        align="start"
        max={true}>
        <Stars
          rating={0}
          isRating={false}
          size={32}
        />
        <Stars
          rating={1}
          isRating={false}
          size={32}
        />
        <Stars
          rating={2}
          isRating={false}
          size={32}
        />
        <Stars
          rating={3}
          isRating={false}
          size={32}
        />
        <Stars
          rating={4}
          isRating={false}
          size={32}
        />
        <Stars
          rating={5}
          isRating={false}
          size={32}
        />
      </VStack>

      <Text
        gap="0"
        title="Radio Button"
        variant={TextVariant.SUBTITLE}
      />

      <HStack max={true}>
        <RadioButton id="test-kit-radio" />
      </HStack>
    </VStack>
  );
};

export default Kit;
