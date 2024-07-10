import clsx from 'clsx';
import styles from './Error.module.scss';
import { HStack } from '../Stack';
import { Button, ThemeButton } from '../Button/Button';
import CloseIcon from '@/shared/assets/icons/CloseIcon.svg';

interface ErrorProps {
  className?: string;
  error: string;
  onClose: () => void;
}

export const Error = (props: ErrorProps) => {
    const {
        className,
        error,
        onClose,
    } = props;

    return (
        <HStack gap="16" align="center" justify="between" className={clsx(styles.error, {}, [className])}>
            <p className={styles.title}>{error}</p>

            <Button onClick={onClose} className={styles.closeBtn} theme={ThemeButton.ICON}>
                <CloseIcon className={styles.closeIcon} />
            </Button>
        </HStack>
    );
};
