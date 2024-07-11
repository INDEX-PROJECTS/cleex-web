/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/display-name */
import clsx from 'clsx';
import {
    createRef,
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import styles from './Tabs.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import { Text, TextVariant } from '../Text/Text';
import { Mods } from '@/shared/types';

export interface TabItem {
  value: string;
  content: string;
}

export enum ThemeTab {
    DEFAULT = 'default',
    MAIN = 'main'
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  theme: ThemeTab;
  value: string;
  variant?: TextVariant;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        theme = ThemeTab.DEFAULT,
        variant = TextVariant.TITLE,
        value,
        onTabClick,
    } = props;

    const activeRef = useRef<HTMLButtonElement>(null);

    const none = useRef<HTMLButtonElement>(null);

    const [offset, setOffset] = useState(0);

    const [width, setWidth] = useState(0);

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    useEffect(() => {
        const activeElement = activeRef.current;

        if (activeElement) {
            setOffset(activeElement.offsetLeft);
            setWidth(activeElement.offsetWidth);
        }
    }, [value, activeRef]);

    const mods: Mods = {
        [styles[theme]]: true,
    };

    return (
        <div className={clsx(styles.Tabs, mods, [className])}>
            {tabs.map((tab) => (
                <button
                    type="button"
                    onClick={clickHandle(tab)}
                    key={tab.value}
                    className={clsx(styles.tab, {
                        [styles.selected]: tab.value === value,
                    })}
                    ref={tab.value === value ? activeRef : none}
                >
                    <Text
                        gap="0"
                        text={tab.content}
                        textPrimary={tab.value === value}
                        variant={variant}
                        className={styles.text}
                    />
                </button>
            ))}
            {
                theme === ThemeTab.MAIN && (
                    <div
                        style={{
                            width: `${width}px`,
                            transform: `translateX(${offset}px)`,
                        }}
                        className={styles.line}
                    />
                )
            }
        </div>
    );
});
