import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import { Input } from '@/shared/ui/Input/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import styles from './LoginForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getLoginIsLoading, getLoginPassword, getLoginPhone, getLoginValidateData,
} from '../../model/selectors/getLoginData';
import { loginActions } from '../../model/slice/loginSlice';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { validateLoginData } from '../../model/services/validateLoginData/validateLoginData';
import { getStandardNumber } from '@/shared/utils/getStandardNumber/getStandardNumber';
import { loginByPhoneNumber } from '../../model/services/loginByPhoneNumber';

interface LoginFormProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className, handleChangeStep } = props;

    const dispatch = useAppDispatch();

    const phone = useAppSelector(getLoginPhone);
    const password = useAppSelector(getLoginPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const validateLoginDataErrors = useAppSelector(getLoginValidateData);

    const [check, setCheck] = useState(false);

    const onChangePassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setPassword(event.currentTarget.value));
        },
        [dispatch],
    );

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
                        onClick={() => handleChangeStep(3)}
                        theme={ThemeButton.LINK}
                    >
                        Забыли пароль?
                    </Button>
                </HStack>

                <Button
                    fullWidth
                    disabled={isLoading}
                    onClick={handleSubmitLogin}
                    className={styles.submitBtn}
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
