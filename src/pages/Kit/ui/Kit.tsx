"use client";

/* eslint-disable import/no-internal-modules */
import React, { useCallback, useState } from "react";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.svg";
import { Input } from "@/shared/ui/Input/Input";
import CloseIcon from "@/shared/assets/icons/CloseIcon.svg";

import ArrowBackIcon from "@/shared/assets/icons/ArrowIcon.svg";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import type { TabItem } from "@/shared/ui/Tabs/Tabs";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Loader, ThemeLoader } from "@/shared/ui/Loader/Loader";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text, TextVariant } from "@/shared/ui/Text/Text";
import styles from "./Kit.module.scss";
import AnnouncementsGrid from "@/shared/ui/AnnouncementsGrid/AnnouncementsGrid.tsx";
import { AnnouncementCard } from "@/entities/announcement";

const tabs: TabItem[] = [
  { value: "Логин", content: "Логин" },
  { value: "Регистрация", content: "Регистрация" },
];
const Kit = () => {
  const [check, setCheck] = useState(false);

  const [activeTab, setActiveTab] = useState("Логин");

  const onTabClick = useCallback((tab: TabItem) => {
    setActiveTab(tab.value);
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
      <h2>Buttons</h2>
      <HStack
        gap="32"
        max={true}>
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

      <h2>Inputs</h2>

      <HStack
        gap="32"
        max={true}>
        <Input
          placeholder="Пароль"
          isPassword={true}
        />
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
      </HStack>

      <h2>Checkboxes</h2>

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

      <h2>Tabs</h2>

      <HStack
        gap="32"
        max={true}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabClick={onTabClick}
        />
      </HStack>

      <h2>Loaders</h2>

      <HStack
        gap="32"
        max={true}>
        <Button theme={ThemeButton.DEFAULT}>
          <Loader theme={ThemeLoader.BTN_LOADER} />
        </Button>
      </HStack>

      <VStack>
        <Text
          gap="0"
          title="Grid wrapper"
          variant={TextVariant.TITLE}
        />
        <AnnouncementsGrid>
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011 в идеальном состоянии"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
          <AnnouncementCard
            imageUrl="https://s3-alpha-sig.figma.com/img/7f12/ea13/00756f144a0fb5daaf68dbfc01103a46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3QcHxfOh7mnWZQTimzSbuFJ~lUpizB4RK5lfHu-P-KPfagZOivgRrEN9qxo4PVL0TpRLX7lK69q-DgoHdK4ckfsestEINxJb6WTWskhf3al2VG~Qq-o2jBciZaNsPyDJBVopNdjCfofUoqAm8Jla6c4hVQWY9MrozYDJHiJWl139SUXT3GMzrIDcA511twt7dVJlaTBmr7ccchdkB-z52XyX4N6v0nbQLbslZXNG-L-Fo3lBthYPeeqLSKiZZSIMNdBDy9pm9ruSv8KZSY5hRNbbXeJKmgk3XflcKZi8SrGWeBDyHJx6mk2t6HZfjVVFmQeJhhhLeCRAPsudeG-gQ__"
            price="1 700"
            title="Капот Toyota Camry 40 2009-2011"
            address="Челябинск, ул. Баумана, 116 а"
            date="19 октября, 21:30"
          />
        </AnnouncementsGrid>
      </VStack>
    </VStack>
  );
};

export default Kit;
