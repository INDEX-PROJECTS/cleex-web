import { CSSTransition } from 'react-transition-group';
import { FC, useEffect, useRef } from 'react';
import styles from './ConfirmLocation.module.scss';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';
import { HStack } from '@/shared/ui/Stack';
import LocationIcon from '@/shared/assets/icons/LocationIcon-2.svg';
import { Text, TextVariant } from '@/shared/ui/Text/Text.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';

interface ConfirmLocationProps {
  isOpen: boolean;
  toggleLocation: () => void;
}

const ConfirmLocation: FC<ConfirmLocationProps> = ({ isOpen, toggleLocation }) => {
    const nodeRef = useRef(null);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current?.contains(event.target as HTMLElement)) {
                toggleLocation();
            }
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                toggleLocation();
            }
        };

        document.addEventListener('click', handleClickOutside);
        if (isOpen) {
            document.addEventListener('keydown', onKey);
        } else {
            document.removeEventListener('keydown', onKey);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', onKey);
        };
    }, [isOpen, ref, toggleLocation]);

    return (
        <CSSTransition
            in={isOpen}
            timeout={400}
            nodeRef={nodeRef}
            classNames={{
                enter: styles['backdrop-enter'],
                enterActive: styles['backdrop-enter-active'],
                exit: styles['backdrop-exit'],
                exitActive: styles['backdrop-exit-active'],
            }}
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.backdrop} ref={nodeRef}>
                <MaxContainer>
                    <div className={styles.location_popover} ref={ref}>
                        <HStack gap="8">
                            <LocationIcon className={styles.location_icon} />
                            <Text gap="0" title="Вы в г. Челябинск?" variant={TextVariant.MAIN_REGULAR} />
                        </HStack>
                        <HStack gap="8">
                            <Button theme={ThemeButton.SECONDARY}>
                                Изменить
                            </Button>
                            <Button theme={ThemeButton.DEFAULT}>
                                Всё верно
                            </Button>
                        </HStack>
                    </div>
                </MaxContainer>
            </div>
        </CSSTransition>
    );
};

export default ConfirmLocation;
