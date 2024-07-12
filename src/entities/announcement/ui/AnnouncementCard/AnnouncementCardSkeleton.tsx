import { memo } from 'react';
import clsx from 'clsx';
import styles from './AnnouncementCardSkeleton.module.scss';

interface AnnouncementCardSkeletonProps {
  className?: string;
}

export const AnnouncementCardSkeleton = memo((props: AnnouncementCardSkeletonProps) => {
    const { className } = props;
    return (
        <div className={clsx(styles.AnnouncementCardSkeleton, {}, [className])}>
            AnnouncementCardSkeleton
        </div>
    );
});
