'use client';

/* eslint-disable react/display-name */
import { memo } from 'react';
import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import type { Mods } from '@/shared/types';

export enum ThemeButton {
  CLEAR = 'clear',
  DEFAULT = 'default',
  SECONDARY = 'secondary',
  ICON = 'icon',
  ICON_BG = 'icon_bg',
  LINK = 'link',
  BACK = 'back',
  TAB = 'tab',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  helper?: boolean;
  helperText?: string;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        fullWidth,
        disabled,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            type="button"
            className={clsx(styles.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
