import Link from 'next/link';
import { forwardRef } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import type { ForwardedRef, ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import styles from './AppLink.module.scss';
import type { Mods } from '@/shared/types';

export enum AppLinkTheme {
  MAIN = 'main',
  GRAY = 'gray',
  ERROR = 'error',
  DARK = 'dark'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  target?: string;
  title?: string;
  children?: ReactNode;
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            href,
            target,
            title,
            className,
            children,
            theme = AppLinkTheme.MAIN,
            ...otherProps
        } = props;

        const mods: Mods = {
            [styles[theme]]: true,
        };
        return (
            <Link
                ref={ref}
                href={href}
                title={title}
                target={target}
                className={classNames(styles.AppLink, mods, [className])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    },
);
