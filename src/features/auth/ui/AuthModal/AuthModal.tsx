import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextVariant } from '@/shared/ui/Text/Text';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import CloseIcon from '@/shared/assets/icons/CloseIcon.svg';
import LocationIcon from '@/shared/assets/icons/LocationIcon.svg';
import FiltersIcon from '@/shared/assets/icons/FiltersIcon.svg';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import DialogIcon from '@/shared/assets/icons/DialogIcon.svg';
import styles from './AuthModal.module.scss';
import { LoginRegistrationStep } from '../LoginRegistrationStep/LoginRegistrationStep';
import { CodeStep } from '../CodeStep/CodeStep';
import { ResetPasswordStep } from '../ResetPasswordStep/ResetPasswordStep';
import { CompleteRegistration } from '../CompleteRegistration/CompleteRegistration';
import ArrowIconBack from '@/shared/assets/icons/ArrowIcon.svg';

interface AuthModalProps {
  className?: string;
  isOpen: boolean;
  portal: boolean;
  onClose: () => void;
}

const stepsToRenderBack = [1, 3];

export const AuthModal = memo((props: AuthModalProps) => {
    const {
        className, onClose, isOpen, portal,
    } = props;

    const [currentStep, setCurrentStep] = useState(0);

    const [modal, setModal] = useState(false);

    const onCloseModal = () => {
        setModal(false);
    };

    const onOpenModal = () => {
        setModal(true);
    };

    const [slideIn, setSlideIn] = useState(true);

    const handleChangeStep = (currentStep: number) => {
        setSlideIn(false);

        setTimeout(() => {
            setCurrentStep(currentStep);
            setSlideIn(true);
        }, 300);
    };

    const renderSteps = useCallback((currentStep: number) => {
        switch (currentStep) {
        case 0:
            return <LoginRegistrationStep handleChangeStep={handleChangeStep} />;

        case 1:
            return <CodeStep handleChangeStep={handleChangeStep} />;

        case 2:
            return <CompleteRegistration handleChangeStep={handleChangeStep} />;

        case 3:
            return <ResetPasswordStep handleChangeStep={handleChangeStep} />;

        default:
            return <LoginRegistrationStep handleChangeStep={handleChangeStep} />;
        }
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            portal={portal}
            onClose={onClose}
            className={clsx(styles.AuthModal, {}, [className])}
        >
            <Modal portal={false} onClose={onCloseModal} isOpen={modal} className={styles.NotificationModal}>
                <VStack align="center" gap="24" max>
                    <Text gap="0" align={TextAlign.CENTER} textPrimary text="Пользователь с таким номером уже существует" />

                    <Button fullWidth theme={ThemeButton.DEFAULT}>
                        Хорошо
                    </Button>
                </VStack>
            </Modal>
            <HStack
                max
                align="start"
                justify="between"
                className={styles.container}
            >
                <VStack
                    align="start"
                    gap="32"
                    max
                    className={styles.info}
                >
                    <div className={styles.infoBg} />
                    <Text
                        gap="0"
                        white
                        variant={TextVariant.DESCRIPTION_REGULAR}
                        title="Войдите, чтобы использовать все возможности CLEEX"
                    />
                    <VStack className={styles.backContainer} max justify="between" align="start">
                        <VStack
                            align="start"
                            gap="16"
                        >
                            <HStack
                                justify="start"
                                align="center"
                                gap="32"
                            >
                                <FiltersIcon className={styles.icon} />

                                <Text
                                    gap="0"
                                    white
                                    variant={TextVariant.ADDITIONAL}
                                    title="Объявление можно разместить просто быстро и совершенно бесплатно"
                                />
                            </HStack>

                            <HStack
                                justify="start"
                                align="center"
                                gap="32"
                            >
                                <LocationIcon className={styles.icon} />

                                <Text
                                    gap="0"
                                    white
                                    variant={TextVariant.ADDITIONAL}
                                    title="Растущий охват регионов нашей страны"
                                />
                            </HStack>

                            <HStack
                                justify="start"
                                align="center"
                                gap="32"
                            >
                                <DialogIcon className={styles.icon} />

                                <Text
                                    gap="0"
                                    white
                                    variant={TextVariant.ADDITIONAL}
                                    title="Бесплатный доступ к контактам продавцов"
                                />
                            </HStack>

                            <HStack
                                justify="start"
                                align="center"
                                gap="32"
                            >
                                <SearchIcon className={styles.icon} />

                                <Text
                                    gap="0"
                                    white
                                    variant={TextVariant.ADDITIONAL}
                                    title="Удобный и простой поиск"
                                />
                            </HStack>
                        </VStack>

                        {stepsToRenderBack.includes(currentStep) && (
                            <Button onClick={() => handleChangeStep(0)} theme={ThemeButton.BACK}>
                                <ArrowIconBack />
                                Назад
                            </Button>
                        )}
                    </VStack>

                </VStack>

                <VStack
                    max
                    align="end"
                    gap="16"
                    className={styles.formWrapper}
                >

                    <Button
                        onClick={onOpenModal}
                        theme={ThemeButton.ICON_BG}
                    >
                        <CloseIcon />
                    </Button>

                    <CSSTransition
                        in={slideIn}
                        timeout={300}
                        unmountOnExit
                        classNames="slide-animation"
                    >
                        {renderSteps(currentStep)}
                    </CSSTransition>
                </VStack>
            </HStack>
        </Modal>
    );
});
