"use client";

/* eslint-disable import/no-internal-modules */
import React, { useCallback, useState } from "react";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.svg";
import { Input } from "@/shared/ui/Input/Input";
import CloseIcon from "@/shared/assets/icons/CloseIcon.svg";

import ArrowBackIcon from "@/shared/assets/icons/ArrowIcon.svg";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Loader, ThemeLoader } from "@/shared/ui/Loader/Loader";
import styles from "./Kit.module.scss";
import type { TabItem } from "@/shared/ui/Tabs/Tabs";

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
    <div className={styles.Kit}>
      <h2>Buttons</h2>
      <div className={styles.container}>
        <Button theme={ThemeButton.DEFAULT}>Default</Button>

        <Button theme={ThemeButton.CLEAR}>Clear</Button>

        <Button theme={ThemeButton.ICON}>
          <ProfileIcon />
        </Button>

        <Button theme={ThemeButton.ICON_BG}>
          <CloseIcon />
        </Button>

        <Button theme={ThemeButton.LINK}>Забыли пароль?</Button>

        <div className={styles.bg_main}>
          <Button theme={ThemeButton.BACK}>
            <ArrowBackIcon />
            Назад
          </Button>
        </div>
      </div>

      <h2>Inputs</h2>

      <div className={styles.container}>
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
          mask="9999"
          code={true}
        />
      </div>

      <h2>Checkboxes</h2>

      <div className={styles.container}>
        <Checkbox
          label="Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением"
          checked={check}
          id="registrationCheck"
          onToggle={() => {
            return setCheck(!check);
          }}
        />
      </div>

      <h2>Tabs</h2>

      <div className={styles.container}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabClick={onTabClick}
        />
      </div>

      <h2>Loaders</h2>

      <div className={styles.container}>
        <Button theme={ThemeButton.DEFAULT}>
          <Loader theme={ThemeLoader.BTN_LOADER} />
        </Button>

        <Loader theme={ThemeLoader.MAIN_LOADER} />
      </div>
    </div>
  );
};

export default Kit;
