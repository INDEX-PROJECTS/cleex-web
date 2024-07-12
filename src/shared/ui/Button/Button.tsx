'use client';

/* eslint-disable react/display-name */
import { memo, useState } from 'react';
import type { ButtonHTMLAttributes, LegacyRef, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './Button.module.scss';
import type { Mods } from '@/shared/types';
import { VStack } from '../Stack';
import { Text, TextVariant } from '../Text/Text';

export enum ThemeButton {
  CLEAR = 'clear',
  DEFAULT = 'default',
  SELECTOR = 'selector',
  SHADOW = 'shadow',
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
  position?: string;
  helper?: boolean;
  helperText?: string;
  ref?: LegacyRef<HTMLButtonElement> | undefined
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        fullWidth,
        position,
        disabled,
        helper,
        helperText,
        ref,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    const [isShown, setIsShown] = useState(false);

    const onMouseEnter = () => {
        setIsShown(true);
    };
    const onMouseLeave = () => {
        setIsShown(false);
    };

    if (helper && helperText) {
        return (
            <div className={classNames(styles.buttonWrapper, {}, [position])} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <button
                    disabled={disabled}
                    type="button"
                    className={classNames(styles.Button, mods, [className])}
                    {...otherProps}
                >
                    {children}
                </button>
                {
                    helper && (
                        <CSSTransition
                            in={isShown}
                            timeout={300}
                            unmountOnExit
                            classNames="slide-animation"
                        >
                            <VStack className={styles.helper}>
                                <Text gap="0" variant={TextVariant.ADDITIONAL} text={helperText} />
                            </VStack>
                        </CSSTransition>
                    )
                }

            </div>
        );
    }

    return (
        <button
            ref={ref}
            disabled={disabled}
            type="button"
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
