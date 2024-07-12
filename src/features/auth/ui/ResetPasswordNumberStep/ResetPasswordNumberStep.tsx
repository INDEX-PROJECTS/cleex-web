/* eslint-disable camelcase */
import {
    ChangeEvent, MutableRefObject, memo, useCallback, useRef, useState,
} from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import { CSSTransition } from 'react-transition-group';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ResetPasswordNumberStep.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Error } from '@/shared/ui/Error/Error';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { AuthSteps } from '../../model/types/authSchema';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getLoginError, getLoginHasError, getLoginIsLoading, getLoginResetPhone,
} from '../../model/selectors/getLoginData';
import { loginActions } from '../../model/slice/loginSlice';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { SITE_KEY_RECAPTCHA } from '@/shared/const/constants';
import { fetchResetCallPhone } from '../../model/services/fetchCallPhone/fetchResetCallPhone';

interface ResetPasswordNumberStepProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const ResetPasswordNumberStep = memo((props: ResetPasswordNumberStepProps) => {
    const { className, handleChangeStep } = props;

    const recaptcha: MutableRefObject<ReCAPTCHA | null> = useRef<ReCAPTCHA>(null);

    const [phoneError, setPhoneError] = useState('');

    const dispatch = useAppDispatch();

    const resetPhone = useAppSelector(getLoginResetPhone);
    const error = useAppSelector(getLoginError);
    const hasError = useAppSelector(getLoginHasError);

    const isLoading = useAppSelector(getLoginIsLoading);

    const validatePhoneNumber = (phone: string) => {
        if (!phone || phone.length !== 18) {
            return setPhoneError('Некорректный ввод данных');
        }

        return setPhoneError('');
    };

    const removeError = () => {
        dispatch(loginActions.setHasError(false));

        setTimeout(() => {
            dispatch(loginActions.setError(''));
        }, 300);
    };

    const onChangeResetPhone = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setResetPhone(event.currentTarget.value));
        },
        [dispatch],
    );

    const handleSubmitForm = () => {
        validatePhoneNumber(resetPhone);

        if (phoneError === '') {
            recaptcha.current?.execute();
        }
    };

    const onChangeCaptcha = useCallback(async (recaptcha_token: string | null) => {
        if (phoneError === '' && recaptcha_token) {
            const result = await dispatch(fetchResetCallPhone({ phone: resetPhone, recaptcha_token }));

            if (result.meta.requestStatus === 'fulfilled') {
                handleChangeStep(AuthSteps.CODE_RESET);
            }
        }
    }, [dispatch, handleChangeStep, phoneError, resetPhone]);

    return (
        <VStack max justify="between" className={classNames(styles.ResetPasswordNumberStep, {}, [className])}>

            <VStack gap="24" max>
                <Text
                    gap="0"
                    text="Восстановление пароля"
                    textPrimary
                    variant={TextVariant.TITLE}
                />

                <Input
                    mask="+7 (999) 999-99-99"
                    value={resetPhone}
                    error={phoneError !== ''}
                    errorText={phoneError}
                    onChange={onChangeResetPhone}
                    placeholder="+7 (___) ___-__-__"
                />

            </VStack>

            <ReCAPTCHA
                lang="RU"
                ref={recaptcha}
                sitekey={SITE_KEY_RECAPTCHA}
                size="invisible"
                onChange={onChangeCaptcha}
                className={styles.captcha}
            />

            <VStack gap="16" max>
                <CSSTransition
                    in={hasError}
                    timeout={300}
                    unmountOnExit
                    classNames="slide-animation"
                >
                    <Error onClose={removeError} error={error || 'Ошибка'} />
                </CSSTransition>
                <Button className="submitBtn" fullWidth onClick={handleSubmitForm} theme={ThemeButton.DEFAULT}>
                    {
                        isLoading ? (<Loader theme={ThemeLoader.BTN_LOADER} />) : 'Продолжить'
                    }
                </Button>
            </VStack>
        </VStack>
    );
});
