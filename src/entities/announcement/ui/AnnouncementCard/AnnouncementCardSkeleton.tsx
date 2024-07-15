import { memo } from 'react';
import styles from './AnnouncementCard.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const AnnouncementCardSkeleton = memo(() => (
    <VStack gap="8">
        <Skeleton
            border="8px"
            className={styles.image}
        />

        <VStack align="start" max gap="4">
            <Skeleton height="26px" width="100%" border="8px" />
            <Skeleton height="18px" width="100%" border="8px" />

            <Skeleton height="17px" width="70%" border="8px" />
            <Skeleton height="17px" width="40%" border="8px" />
        </VStack>

    </VStack>
));
