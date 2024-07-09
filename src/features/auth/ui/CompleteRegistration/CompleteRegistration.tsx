import { memo, useState } from 'react';
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

interface CompleteRegistrationProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const CompleteRegistration = memo((props: CompleteRegistrationProps) => {
    const { className, handleChangeStep } = props;

    const [meter, setMeter] = useState(false);
    const [password, setPassword] = useState('');

    const [check, setCheck] = useState(false);

    const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

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
                    <Input placeholder="Имя пользователя" />

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
                            onChange={onChangeNewPassword}
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
                <Checkbox
                    label="Я согласен(-на) с лицензионным соглашением"
                    checked={check}
                    id="registrationCheck"
                    onToggle={() => setCheck(!check)}
                />
                <Button
                    onClick={() => handleChangeStep(0)}
                    fullWidth
                    theme={ThemeButton.DEFAULT}
                >
                    Зарегистрироваться
                </Button>
            </VStack>
        </VStack>
    );
});
