import type { ReactNode } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './MaxContainer.module.scss';

interface MainContainerProps {
  children: ReactNode;
  height?: string;
  className?: string;
}

const MaxContainer = (props: MainContainerProps) => {
    const { children, height, className } = props;

    return (
        <div className={styles.MainContainer} style={{ height: `${height}` }}>
            <div className={classNames(styles.MainContainer_max, [className])} style={{ height: `${height}` }}>{children}</div>
        </div>
    );
};

export default MaxContainer;
