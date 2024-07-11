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
import { CodeRegistrationStep } from '../CodeStep/CodeRegistrationStep';
import { ResetPasswordStep } from '../ResetPasswordStep/ResetPasswordStep';
import { CompleteRegistration } from '../CompleteRegistration/CompleteRegistration';
import ArrowIconBack from '@/shared/assets/icons/ArrowIcon.svg';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { authActions, authSlice } from '../../model/slice/authSlice';
import { AuthSteps } from '../../model/types/authSchema';
import { getAuthCurrentStep, getAuthNotificationModal, getAuthNotificationText } from '../../model/selectors/getAuthData';
import { ResetPasswordNumberStep } from '../ResetPasswordNumberStep/ResetPasswordNumberStep';
import { CodeResetStep } from '../CodeStep/CodeResetStep';
import { loginActions } from '../../model/slice/loginSlice';

interface AuthModalProps {
  className?: string;
  isOpen: boolean;
  onCloseModal: () => void;
}

const isBackSteps = [AuthSteps.CODE_REGISTRATION, AuthSteps.CODE_RESET, AuthSteps.RESET_START];

export const AuthModal = memo((props: AuthModalProps) => {
    const {
        className,
        isOpen,
        onCloseModal,
    } = props;

    const dispatch = useAppDispatch();

    const [slideIn, setSlideIn] = useState(true);

    const notificationModal = useAppSelector(getAuthNotificationModal);

    const notificationText = useAppSelector(getAuthNotificationText);

    const currentStep = useAppSelector(getAuthCurrentStep);

    const handleCloseNotificationModal = () => {
        dispatch(authActions.setNotificationModal(false));
    };

    const handleChangeStep = useCallback((currentStep: AuthSteps) => {
        setSlideIn(false);

        setTimeout(() => {
            dispatch(authSlice.actions.setCurrentStep(currentStep));
            setSlideIn(true);
        }, 300);
    }, [dispatch]);

    const removeLoginError = () => {
        dispatch(loginActions.setHasError(false));

        setTimeout(() => {
            dispatch(loginActions.setError(''));
        }, 300);
    };

    const removeRegistrationError = () => {
        dispatch(loginActions.setHasError(false));

        setTimeout(() => {
            dispatch(loginActions.setError(''));
        }, 300);
    };

    const handleChangeStepBack = () => {
        removeRegistrationError();

        removeLoginError();
        handleChangeStep(AuthSteps.START);
    };

    const renderSteps = useCallback((currentStep: AuthSteps) => {
        switch (currentStep) {
        case AuthSteps.START:
            return <LoginRegistrationStep handleChangeStep={handleChangeStep} />;

        case AuthSteps.CODE_REGISTRATION:
            return <CodeRegistrationStep handleChangeStep={handleChangeStep} />;

        case AuthSteps.CODE_RESET:
            return <CodeResetStep handleChangeStep={handleChangeStep} />;

        case AuthSteps.REGISTRATION:
            return <CompleteRegistration handleChangeStep={handleChangeStep} />;

        case AuthSteps.RESET:
            return <ResetPasswordStep handleChangeStep={handleChangeStep} />;

        case AuthSteps.RESET_START:
            return <ResetPasswordNumberStep handleChangeStep={handleChangeStep} />;

        default:
            return <LoginRegistrationStep handleChangeStep={handleChangeStep} />;
        }
    }, [handleChangeStep]);

    return (
        <Modal
            isNotification={false}
            isOpen={isOpen}
            portal
            onClose={onCloseModal}
            className={clsx(styles.AuthModal, {}, [className])}
        >
            <Modal isNotification portal onClose={handleCloseNotificationModal} isOpen={notificationModal} className={styles.NotificationModal}>
                <VStack align="center" gap="24" max>
                    <Text
                        gap="0"
                        align={TextAlign.CENTER}
                        textPrimary
                        text={notificationText}
                    />

                    <Button onClick={handleCloseNotificationModal} fullWidth theme={ThemeButton.DEFAULT}>
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

                        {isBackSteps.includes(currentStep) && (
                            <Button onClick={handleChangeStepBack} theme={ThemeButton.BACK}>
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
                        onClick={onCloseModal}
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
