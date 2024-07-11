import {
    ChangeEvent, memo, useCallback, useState,
} from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ResetPasswordStep.module.scss';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { PasswordStrength } from '@/shared/ui/PasswordStrength/PasswordStrength';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getLoginError,
    getLoginHasError,
    getLoginIsLoading,
    getLoginPhoneToken,
    getLoginRepeatResetPassword,
    getLoginResetPassword,
} from '../../model/selectors/getLoginData';
import { loginActions } from '../../model/slice/loginSlice';
import { AuthSteps } from '../../model/types/authSchema';
import { validatePasswords } from '../../model/services/validatePasswords/validatePasswords';
import { fetchUserResetPassword } from '../../model/services/fetchUserResetPassword';
import { Error } from '@/shared/ui/Error/Error';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';

interface ResetPasswordStepProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const ResetPasswordStep = memo((props: ResetPasswordStepProps) => {
    const { className, handleChangeStep } = props;

    const dispatch = useAppDispatch();

    const [meter, setMeter] = useState(false);

    const resetPassword = useAppSelector(getLoginResetPassword);
    const repeatResetPassword = useAppSelector(getLoginRepeatResetPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const phoneToken = useAppSelector(getLoginPhoneToken);
    const error = useAppSelector(getLoginError);
    const hasError = useAppSelector(getLoginHasError);

    const onChangeResetPassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setResetPassword(event.currentTarget.value));
        },
        [dispatch],
    );

    const onChangeRepeatResetPassword = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setRepeatResetPassword(event.currentTarget.value));
        },
        [dispatch],
    );

    const handleResetPassword = useCallback(async () => {
        const errors = validatePasswords(resetPassword, repeatResetPassword);
        if (errors.resetPassword.length === 0 && errors.repeatResetPassword.length === 0) {
            const result = await dispatch(fetchUserResetPassword({
                new_password: resetPassword,
                phoneToken,
            }));

            if (result.meta.requestStatus === 'fulfilled') {
                alert('Пароль успешно изменен');
            }
        }
        return dispatch(loginActions.setResetPasswordsError(errors));
    }, [dispatch, phoneToken, repeatResetPassword, resetPassword]);

    const removeError = () => {
        dispatch(loginActions.setHasError(false));

        setTimeout(() => {
            dispatch(loginActions.setError(''));
        }, 300);
    };

    return (
        <VStack
            max
            justify="between"
            className={clsx(styles.ResetPasswordStep, {}, [className])}
        >

            <VStack max gap="24">
                <Text
                    gap="0"
                    text="Востановление пароля"
                    textPrimary
                    variant={TextVariant.TITLE}
                />

                <VStack max gap="16">

                    <HStack
                        max
                        className={styles.passwordWrapper}
                    >
                        <Input
                            placeholder="Введите новый пароль"
                            isPassword
                            value={resetPassword}
                            onBlur={() => setMeter(false)}
                            onFocus={() => setMeter(true)}
                            onChange={onChangeResetPassword}
                        />
                        <CSSTransition
                            in={meter}
                            timeout={300}
                            unmountOnExit
                            classNames="slide-animation"
                        >
                            <PasswordStrength
                                password={resetPassword || ''}
                                className={styles.passwordPosition}
                            />
                        </CSSTransition>
                    </HStack>

                    <Input
                        placeholder="Повторите пароль"
                        isPassword
                        value={repeatResetPassword}
                        onChange={onChangeRepeatResetPassword}
                    />

                </VStack>
            </VStack>

            <VStack max gap="16">
                <CSSTransition
                    in={hasError}
                    timeout={300}
                    unmountOnExit
                    classNames="slide-animation"
                >
                    <Error onClose={removeError} error={error || 'Ошибка'} />
                </CSSTransition>
                <Button
                    fullWidth
                    onClick={handleResetPassword}
                    theme={ThemeButton.DEFAULT}
                >
                    {
                        isLoading ? (<Loader theme={ThemeLoader.BTN_LOADER} />) : ' Восстановить пароль'
                    }
                </Button>
            </VStack>

        </VStack>
    );
});
