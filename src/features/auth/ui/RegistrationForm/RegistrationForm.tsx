import {
    ChangeEvent, MutableRefObject, createRef, memo, useCallback,
    useRef,
    useState,
} from 'react';
import clsx from 'clsx';
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';
import { Input } from '@/shared/ui/Input/Input';
import { VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import styles from './RegistrationForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { getRegistrationPhone } from '../../model/selectors/getRegistrationData';
import { registrationActions } from '../../model/slice/registrationSlice';
import { SITE_KEY_RECAPTCHA } from '@/shared/const/constants';

interface RegistrationFormProps {
  className?: string;
  handleChangeStep: (currentStep: number) => void;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
    const { className, handleChangeStep } = props;

    const recaptcha: MutableRefObject<ReCAPTCHA | null> = useRef<ReCAPTCHA>(null);
    const dispatch = useAppDispatch();
    const phone = useAppSelector(getRegistrationPhone);

    const onChangePhone = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(registrationActions.setPhone(event.currentTarget.value));
        },
        [dispatch],
    );

    const handleSubmitForm = () => {
        recaptcha.current?.execute();
    };

    const onChangeCaptcha = (token: string | null) => {
        dispatch(registrationActions.setToken(token));
        handleChangeStep(1);
    };

    return (
        <VStack
            max
            gap="16"
            justify="between"
            className={clsx(styles.RegistrationForm, {}, [className])}
        >
            <Input
                mask="+7 (999) 999-99-99"
                value={phone}
                onChange={onChangePhone}
                placeholder="+7 (___) ___-__-__"
            />

            <ReCAPTCHA
                lang="RU"
                ref={recaptcha}
                sitekey={SITE_KEY_RECAPTCHA}
                size="invisible"
                onChange={onChangeCaptcha}
                className={styles.captcha}
            />

            <Button
                onClick={handleSubmitForm}
                fullWidth
                theme={ThemeButton.DEFAULT}
            >
                Продолжить
            </Button>
        </VStack>
    );
});
