/* eslint-disable react/display-name */
import clsx from 'clsx';
import { memo, useCallback } from 'react';
import styles from './Tabs.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import { Text, TextVariant } from '../Text/Text';

export interface TabItem {
  value: string;
  content: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  variant?: TextVariant;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        variant = TextVariant.TITLE,
        value,
        onTabClick,
    } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={clsx(styles.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Button
                    onClick={clickHandle(tab)}
                    key={tab.value}
                    theme={ThemeButton.TAB}
                    className={clsx(styles.tab, {
                        [styles.selected]: tab.value === value,
                    })}
                >
                    <Text
                        gap="0"
                        text={tab.content}
                        textPrimary={tab.value === value}
                        variant={variant}
                        className={styles.text}
                    />
                </Button>
            ))}
        </div>
    );
});
