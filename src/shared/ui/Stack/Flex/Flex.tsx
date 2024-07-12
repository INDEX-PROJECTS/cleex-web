import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Flex.module.scss';
import type { Mods } from '@/shared/types';
import { classNames } from '@/shared/utils/classNames/classNames';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';

export type FlexAlign = 'start' | 'center' | 'end';

export type FlexDirection = 'row' | 'column';

export type FlexGap = '0' | '4' | '8' | '10' | '16' | '24' | '32' | '48' | '50';

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    0: styles.gap0,
    4: styles.gap4,
    8: styles.gap8,
    10: styles.gap10,
    16: styles.gap16,
    24: styles.gap24,
    32: styles.gap32,
    48: styles.gap48,
    50: styles.gap50,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  wrap?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        gap,
        max,
        wrap,
        justify = 'start',
        align = 'center',
        direction = 'row',
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [styles.max]: max,
        [styles.wrap]: wrap,
    };
    return <div className={classNames(styles.Flex, mods, classes)}>{children}</div>;
};
