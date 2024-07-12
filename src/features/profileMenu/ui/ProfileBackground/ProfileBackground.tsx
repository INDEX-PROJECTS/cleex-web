import { memo } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './ProfileBackground.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

interface ProfileBackgroundProps {
  className?: string;
  handleChangeBackground: () => void;
}

export const ProfileBackground = memo((props: ProfileBackgroundProps) => {
    const { className, handleChangeBackground } = props;
    return (
        <div className={classNames(styles.ProfileBackground, {}, [className])}>
            <Button onClick={handleChangeBackground} className={styles.btn} theme={ThemeButton.SHADOW}>
                Изменить обложку
            </Button>
        </div>
    );
});
