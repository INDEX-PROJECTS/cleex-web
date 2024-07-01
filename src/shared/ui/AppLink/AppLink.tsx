import Link, { LinkProps } from 'next/link';
import styles from './AppLink.module.scss';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  DEFAULT = 'default',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = forwardRef((props : AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        href, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link ref={ref} href={href} className={clsx(styles.AppLink, {}, [className, styles[theme]])} {...otherProps}>
            {children}
        </Link>
    );
});
