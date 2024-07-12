/* eslint-disable camelcase */
import {
    ChangeEvent, MutableRefObject, createRef, memo, useCallback,
    useRef,
    useState,
} from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha';
import { CSSTransition } from 'react-transition-group';
import { Input } from '@/shared/ui/Input/Input';
import { VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import styles from './RegistrationForm.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getRegistrationError, getRegistrationHasError, getRegistrationIsLoading, getRegistrationPhone,
} from '../../model/selectors/getRegistrationData';
import { registrationActions } from '../../model/slice/registrationSlice';
import { SITE_KEY_RECAPTCHA } from '@/shared/const/constants';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { Error } from '@/shared/ui/Error/Error';
import { AuthSteps } from '../../model/types/authSchema';
import { fetchRegistrationCallPhone } from '../../model/services/fetchCallPhone/fetchRegistrationCallPhone';

interface RegistrationFormProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
    const { className, handleChangeStep } = props;

    const [phoneError, setPhoneError] = useState('');

    const recaptcha: MutableRefObject<ReCAPTCHA | null> = useRef<ReCAPTCHA>(null);
    const dispatch = useAppDispatch();
    const phone = useAppSelector(getRegistrationPhone);
    const isLoading = useAppSelector(getRegistrationIsLoading);
    const error = useAppSelector(getRegistrationError);
    const hasError = useAppSelector(getRegistrationHasError);

    const validatePhoneNumber = (phone: string) => {
        if (!phone || phone.length !== 18) {
            return setPhoneError('Некорректный ввод данных');
        }

        return setPhoneError('');
    };

    const removeError = () => {
        dispatch(registrationActions.setHasError(false));

        setTimeout(() => {
            dispatch(registrationActions.setError(''));
        }, 300);
    };

    const onChangePhone = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(registrationActions.setPhone(event.currentTarget.value));
        },
        [dispatch],
    );

    const handleSubmitForm = () => {
        validatePhoneNumber(phone);

        if (phoneError === '') {
            recaptcha.current?.execute();
        }
    };

    const onChangeCaptcha = useCallback(async (recaptcha_token: string | null) => {
        dispatch(registrationActions.setToken(recaptcha_token));

        if (phoneError === '' && recaptcha_token) {
            const result = await dispatch(fetchRegistrationCallPhone({ phone, recaptcha_token }));

            if (result.meta.requestStatus === 'fulfilled') {
                handleChangeStep(AuthSteps.CODE_REGISTRATION);
            }
        }
    }, [dispatch, handleChangeStep, phone, phoneError]);

    return (
        <VStack
            max
            gap="16"
            justify="between"
            className={classNames(styles.RegistrationForm, {}, [className])}
        >
            <Input
                mask="+7 (999) 999-99-99"
                value={phone}
                error={phoneError !== ''}
                errorText={phoneError}
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

            <VStack gap="16" max>
                <CSSTransition
                    in={hasError}
                    timeout={300}
                    unmountOnExit
                    classNames="slide-animation"
                >
                    <Error onClose={removeError} error={error || 'Ошибка'} />
                </CSSTransition>

                <Button
                    onClick={handleSubmitForm}
                    fullWidth
                    className="submitBtn"
                    theme={ThemeButton.DEFAULT}
                >
                    {
                        isLoading ? (<Loader theme={ThemeLoader.BTN_LOADER} />) : 'Продолжить'
                    }
                </Button>
            </VStack>

        </VStack>
    );
});
