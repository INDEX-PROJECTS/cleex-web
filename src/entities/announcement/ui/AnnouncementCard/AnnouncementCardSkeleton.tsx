import { memo } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './AnnouncementCardSkeleton.module.scss';

interface AnnouncementCardSkeletonProps {
  className?: string;
}

export const AnnouncementCardSkeleton = memo((props: AnnouncementCardSkeletonProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.AnnouncementCardSkeleton, {}, [className])}>
            AnnouncementCardSkeleton
        </div>
    );
});
