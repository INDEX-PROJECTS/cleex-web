import { memo, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import type { ChangeEvent } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { PasswordStrength } from '@/shared/ui/PasswordStrength/PasswordStrength';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import styles from './CompleteRegistration.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getRegistrationError,
    getRegistrationHasError,
    getRegistrationIsLoading,
    getRegistrationName,
    getRegistrationPassword, getRegistrationPhone,
    getRegistrationPhoneToken,
} from '../../model/selectors/getRegistrationData';
import { registrationActions } from '../../model/slice/registrationSlice';
import { validateRegistrationData } from '../../model/services/validateRegistrationData/validateRegistrationData';
import { fetchUserRegistration } from '../../model/services/fetchUserRegistration';
import { AuthSteps } from '../../model/types/authSchema';
import { Error } from '@/shared/ui/Error/Error';
import { authActions } from '../../model/slice/authSlice';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';

interface CompleteRegistrationProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const CompleteRegistration = memo((props: CompleteRegistrationProps) => {
    const { className, handleChangeStep } = props;

    const [meter, setMeter] = useState(false);

    const [isAgree, setIsAgree] = useState<boolean>(true);

    const dispatch = useAppDispatch();

    const name = useAppSelector(getRegistrationName);
    const password = useAppSelector(getRegistrationPassword);
    const phoneToken = useAppSelector(getRegistrationPhoneToken);
    const phone = useAppSelector(getRegistrationPhone);
    const isLoading = useAppSelector(getRegistrationIsLoading);
    // const validateRegistrationData = useAppSelector(getRegistrationValidateData);
    const error = useAppSelector(getRegistrationError);
    const hasError = useAppSelector(getRegistrationHasError);

    const onChangeName = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(registrationActions.setName(event.currentTarget.value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(registrationActions.setPassword(event.currentTarget.value));
        },
        [dispatch],
    );

    const removeError = () => {
        dispatch(registrationActions.setHasError(false));

        setTimeout(() => {
            dispatch(registrationActions.setError(''));
        }, 300);
    };

    const handleSubmitRegistration = useCallback(async () => {
        const errors = validateRegistrationData(name, password);
        if (errors.name.length === 0 && errors.password.length === 0 && isAgree) {
            const result = await dispatch(fetchUserRegistration({
                name,
                phone,
                password,
                phoneToken,
                agree: isAgree,
            }));

            if (result.meta.requestStatus === 'fulfilled') {
                dispatch(authActions.setNotificationText('Вы успеш'));
                dispatch(authActions.setNotificationModal(true));
            }
        }
        return dispatch(registrationActions.setRegistrationValidateDataError(errors));
    }, [dispatch, isAgree, name, password, phone, phoneToken]);

    return (
        <VStack
            max
            justify="between"
            className={classNames(styles.CompleteRegistration, {}, [className])}
        >
            <VStack
                max
                gap="24"
            >
                <Text
                    gap="0"
                    text="Регистрация"
                    textPrimary
                    variant={TextVariant.TITLE}
                />

                <VStack
                    max
                    gap="16"
                >
                    <Input
                        value={name}
                        onChange={onChangeName}
                        placeholder="Имя пользователя"
                    />

                    <HStack
                        max
                        className={styles.passwordWrapper}
                    >
                        <Input
                            placeholder="Пароль"
                            isPassword
                            value={password}
                            onBlur={() => setMeter(false)}
                            onFocus={() => setMeter(true)}
                            onChange={onChangePassword}
                        />
                        <CSSTransition
                            in={meter}
                            timeout={300}
                            unmountOnExit
                            classNames="slide-animation"
                        >
                            <PasswordStrength
                                password={password || ''}
                                className={styles.passwordPosition}
                            />
                        </CSSTransition>
                    </HStack>
                </VStack>
            </VStack>
            <VStack
                max
                gap="16"
            >
                <CSSTransition
                    in={hasError}
                    timeout={300}
                    unmountOnExit
                    classNames="slide-animation"
                >
                    <Error onClose={removeError} error={error || 'Ошибка'} />
                </CSSTransition>
                <Checkbox
                    label="Я согласен(-на) с лицензионным соглашением"
                    checked={isAgree}
                    id="registrationCheck"
                    onToggle={() => setIsAgree(!isAgree)}
                />
                <Button
                    disabled={!isAgree}
                    onClick={handleSubmitRegistration}
                    fullWidth
                    className="submitBtn"
                    theme={ThemeButton.DEFAULT}
                >

                    {
                        isLoading ? (<Loader theme={ThemeLoader.BTN_LOADER} />) : 'Зарегистрироваться'
                    }
                </Button>
            </VStack>
        </VStack>
    );
});
