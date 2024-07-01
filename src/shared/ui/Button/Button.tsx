import { ButtonHTMLAttributes, ReactNode, memo, useState } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { Mods } from '@/shared/types';

export enum ThemeButton {
  CLEAR = 'clear',
  DEFAULT = 'default',
  ICON = 'icon'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
  children?: ReactNode;
  helper?: boolean;
  helperText?: string;
}

export const Button = memo((props : ButtonProps) => {
    const {
        className, children, disabled, helper, helperText, theme = ThemeButton.CLEAR, ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.disabled]: disabled,
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
