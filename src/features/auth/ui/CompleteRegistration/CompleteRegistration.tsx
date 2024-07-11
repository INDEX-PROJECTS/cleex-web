import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import type { ChangeEvent } from 'react';
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
    getRegistrationPassword, getRegistrationPhone, getRegistrationUsername,
} from '../../model/selectors/getRegistrationData';
import { registrationActions } from '../../model/slice/registrationSlice';
import { validateRegistrationData } from '../../model/services/validateRegistrationData/validateRegistrationData';
import { fetchUserRegistration } from '../../model/services/fetchUserRegistration';
import { AuthSteps } from '../../model/types/authSchema';
import { Error } from '@/shared/ui/Error/Error';

interface CompleteRegistrationProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const CompleteRegistration = memo((props: CompleteRegistrationProps) => {
    const { className, handleChangeStep } = props;

    const [meter, setMeter] = useState(false);

    const [check, setCheck] = useState(false);

    const dispatch = useAppDispatch();

    const username = useAppSelector(getRegistrationUsername);
    const password = useAppSelector(getRegistrationPassword);
    const phoneToken = useAppSelector(getRegistrationPassword);
    const phone = useAppSelector(getRegistrationPhone);
    // const validateRegistrationData = useAppSelector(getRegistrationValidateData);
    const error = useAppSelector(getRegistrationError);
    const hasError = useAppSelector(getRegistrationHasError);

    const onChangeUsername = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(registrationActions.setUsername(event.currentTarget.value));
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
        const errors = validateRegistrationData(username, password);
        if (errors.username.length === 0 && errors.password.length === 0 && check) {
            const result = await dispatch(fetchUserRegistration({
                username,
                phone,
                password,
                phoneToken,
                agree: check,
            }));

            if (result.meta.requestStatus === 'fulfilled') {
                alert('Регистрация успешна');
            }
        }
        return dispatch(registrationActions.setRegistrationValidateDataError(errors));
    }, [check, dispatch, password, phone, phoneToken, username]);

    return (
        <VStack
            max
            justify="between"
            className={clsx(styles.CompleteRegistration, {}, [className])}
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
                        value={username}
                        onChange={onChangeUsername}
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
                    checked={check}
                    id="registrationCheck"
                    onToggle={() => setCheck(!check)}
                />
                <Button
                    disabled={!check}
                    onClick={handleSubmitRegistration}
                    fullWidth
                    className="submitBtn"
                    theme={ThemeButton.DEFAULT}
                >
                    Зарегистрироваться
                </Button>
            </VStack>
        </VStack>
    );
});
