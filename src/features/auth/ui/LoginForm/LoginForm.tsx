import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Input } from '@/shared/ui/Input/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import styles from './LoginForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getLoginError,
    getLoginHasError,
    getLoginIsLoading, getLoginPassword, getLoginPhone, getLoginValidateData,
} from '../../model/selectors/getLoginData';
import { loginActions } from '../../model/slice/loginSlice';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { validateLoginData } from '../../model/services/validateLoginData/validateLoginData';
import { loginByPhoneNumber } from '../../model/services/loginByPhoneNumber';
import { Error } from '@/shared/ui/Error/Error';
import { AuthSteps } from '../../model/types/authSchema';

interface LoginFormProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className, handleChangeStep } = props;

    const dispatch = useAppDispatch();

    const phone = useAppSelector(getLoginPhone);
    const password = useAppSelector(getLoginPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const error = useAppSelector(getLoginError);
    const hasError = useAppSelector(getLoginHasError);
    const validateLoginDataErrors = useAppSelector(getLoginValidateData);

    const [check, setCheck] = useState(false);

    const onChangePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPassword(event.currentTarget.value));
        },
        [dispatch],
    );

    const removeError = () => {
        dispatch(loginActions.setHasError(false));

        setTimeout(() => {
            dispatch(loginActions.setError(''));
        }, 300);
    };

    const onChangePhone = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPhone(event.currentTarget.value));
        },
        [dispatch],
    );

    const handleSubmitLogin = useCallback(async () => {
        const errors = validateLoginData(phone, password);

        if (errors.phone.length === 0 && errors.password.length === 0) {
            const result = await dispatch(loginByPhoneNumber({ phone, password }));

            if (result.meta.requestStatus === 'fulfilled') {
                alert('Вход выполнен успешно!');
            }
        }

        return dispatch(loginActions.setLoginValidateDataError(errors));
    }, [dispatch, password, phone]);

    return (
        <VStack
            max
            justify="between"
            gap="16"
            className={clsx(styles.LoginForm, {}, [className])}
        >
            <VStack
                gap="16"
                max
            >
                <Input
                    autoFocus
                    mask="+7 (999) 999-99-99"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    error={validateLoginDataErrors.phone.length > 0}
                    errorText={validateLoginDataErrors.phone[0]}
                    onChange={onChangePhone}
                />

                <Input
                    placeholder="Пароль"
                    isPassword
                    value={password}
                    error={validateLoginDataErrors.password.length > 0}
                    errorText={validateLoginDataErrors.password[0]}
                    onChange={onChangePassword}
                />
            </VStack>

            <VStack
                gap="16"
                max
            >
                <CSSTransition
                    in={hasError}
                    timeout={300}
                    unmountOnExit
                    classNames="slide-animation"
                >
                    <Error onClose={removeError} error={error || 'Ошибка'} />
                </CSSTransition>
                <HStack
                    max
                    align="center"
                    justify="between"
                >
                    <Checkbox
                        label="Запомнить пароль"
                        checked={check}
                        id="registrationCheck"
                        onToggle={() => setCheck(!check)}
                    />

                    <Button
                        onClick={() => handleChangeStep(AuthSteps.RESET_START)}
                        theme={ThemeButton.LINK}
                    >
                        Забыли пароль?
                    </Button>
                </HStack>

                <Button
                    fullWidth
                    disabled={isLoading}
                    onClick={handleSubmitLogin}
                    className="submitBtn"
                    theme={ThemeButton.DEFAULT}
                >
                    {
                        isLoading ? (<Loader theme={ThemeLoader.BTN_LOADER} />) : 'Войти'
                    }
                </Button>
            </VStack>
        </VStack>
    );
});
