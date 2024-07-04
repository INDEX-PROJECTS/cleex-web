/* eslint-disable react/display-name */
import { memo } from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";
import { VStack } from "../Stack";
import type { Mods } from "@/shared/types";
import type { ReactNode } from "react";
import type { FlexGap } from "../Stack/Flex/Flex";

export enum TextTheme {
  PRIMARY = "primary",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextVariant {
  TITLE = "titleMain",
  SUBTITLE = "subtitle",
  DESCRIPTION_MEDIUM = "description_medium",
  DESCRIPTION_REGULAR = "description_regular",
  MAIN_MEDIUM = "main_medium",
  MAIN_REGULAR = "main_regular",
  ADDITIONAL = "additional",
  MINIMUM = "minimum",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  textPrimary?: boolean;
  isActive?: boolean;
  theme?: TextTheme;
  align?: TextAlign;
  variant?: TextVariant;
  gap: FlexGap;
  children?: ReactNode;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeader: Record<TextVariant, HeaderTagType> = {
  [TextVariant.MINIMUM]: "h6",
  [TextVariant.ADDITIONAL]: "h5",
  [TextVariant.MAIN_REGULAR]: "h4",
  [TextVariant.MAIN_MEDIUM]: "h4",
  [TextVariant.DESCRIPTION_REGULAR]: "h3",
  [TextVariant.DESCRIPTION_MEDIUM]: "h3",
  [TextVariant.SUBTITLE]: "h2",
  [TextVariant.TITLE]: "h1",
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    align = TextAlign.LEFT,
    title,
    textPrimary,
    isActive,
    text,
    children,
    gap = "16",
    theme = TextTheme.PRIMARY,
    variant = TextVariant.SUBTITLE,
  } = props;

  const HeaderTag = mapSizeToHeader[variant];

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[variant]]: true,
    [styles.primary]: textPrimary,
    [styles.active]: isActive,
  };

  return (
    <VStack
      gap={gap}
      align="start"
      className={clsx(styles.TextWrapper, mods, [className])}>
      {title && (
        <HeaderTag className={styles.title}>
          {children}

          {title}
        </HeaderTag>
      )}
      {text && <p className={styles.text}>{text}</p>}
    </VStack>
  );
});
