"use client";

/* eslint-disable react/display-name */
import { memo } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import type { Mods } from "@/shared/types";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  DEFAULT = "default",
  ICON = "icon",
  ICON_BG = "icon_bg",
  LINK = "link",
  BACK = "back",
  TAB = "tab",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
  children?: ReactNode;
  helper?: boolean;
  helperText?: string;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    theme = ThemeButton.CLEAR,
    ...otherProps
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
      {...otherProps}>
      {children}
    </button>
  );
});
