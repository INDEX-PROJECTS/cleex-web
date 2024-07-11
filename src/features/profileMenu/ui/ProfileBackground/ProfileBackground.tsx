import { memo } from 'react';
import clsx from 'clsx';
import styles from './ProfileBackground.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

interface ProfileBackgroundProps {
  className?: string;
  handleChangeBackground: () => void;
}

export const ProfileBackground = memo((props: ProfileBackgroundProps) => {
    const { className, handleChangeBackground } = props;
    return (
        <div className={clsx(styles.ProfileBackground, {}, [className])}>
            <Button onClick={handleChangeBackground} className={styles.btn} theme={ThemeButton.SHADOW}>
                Изменить обложку
            </Button>
        </div>
    );
});
