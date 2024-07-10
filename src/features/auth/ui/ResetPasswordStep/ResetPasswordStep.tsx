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
    getLoginIsLoading,
    getLoginRepeatResetPassword,
    getLoginResetPassword,
} from '../../model/selectors/getLoginData';
import { loginActions } from '../../model/slice/loginSlice';
import { AuthSteps } from '../../model/types/authSchema';
import { authActions } from '../../model/slice/authSlice';

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
    return (
        <VStack
            max
            justify="between"
            className={clsx(styles.ResetPasswordStep, {}, [className])}
        >

            <VStack max gap="24">
                <Text
                    gap="0"
                    text="Регистрация"
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
            <Button
                fullWidth
                onClick={() => handleChangeStep(AuthSteps.START)}
                theme={ThemeButton.DEFAULT}
            >
                Продолжить
            </Button>
        </VStack>
    );
});
