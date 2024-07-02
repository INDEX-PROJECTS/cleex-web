/* eslint-disable react/display-name */
import clsx from "clsx";
import { memo, useCallback } from "react";
import styles from "./Tabs.module.scss";
import { Button, ThemeButton } from "../Button/Button";
import type { ReactNode } from "react";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <div className={clsx(styles.Tabs, {}, [className])}>
      {tabs.map((tab) => {
        return (
          <Button
            onClick={clickHandle(tab)}
            key={tab.value}
            theme={ThemeButton.TAB}
            className={clsx(styles.tab, {
              [styles.selected]: tab.value === value,
            })}>
            {tab.content}
          </Button>
        );
      })}
    </div>
  );
});
