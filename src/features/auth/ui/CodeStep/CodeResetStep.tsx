/* eslint-disable camelcase */
import {
    ChangeEvent, memo, useCallback, useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '@/shared/utils/classNames/classNames';
import { AuthSteps } from '../../model/types/authSchema';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import {
    getLoginError,
    getLoginHasError,
    getLoginIsLoading, getLoginResetCode, getLoginResetPhone, getLoginToken,
} from '../../model/selectors/getLoginData';
import { VStack } from '@/shared/ui/Stack';
import styles from './CodeStep.module.scss';
import { Text, TextAlign, TextVariant } from '@/shared/ui/Text/Text';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions } from '../../model/slice/loginSlice';
import { fetchCheckResetCode } from '../../model/services/fetchCheckCode/fetchCheckResetCode';
import { CallCodeInterval } from './CallCodeInterval/CallCodeInterval';
import { Error } from '@/shared/ui/Error/Error';

interface CodeResetStepProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const CodeResetStep = memo((props: CodeResetStepProps) => {
    const { className, handleChangeStep } = props;

    const dispatch = useAppDispatch();

    const [codeError, setCodeError] = useState('');

    const resetPhone = useAppSelector(getLoginResetPhone);
    const code = useAppSelector(getLoginResetCode);
    const isLoading = useAppSelector(getLoginIsLoading);
    const recaptcha_token = useAppSelector(getLoginToken);
    const error = useAppSelector(getLoginError);
    const hasError = useAppSelector(getLoginHasError);

    const validateCode = useCallback((code: string) => {
        if (!code || code.length !== 4) {
            return setCodeError('Некорректный ввод данных');
        }

        return setCodeError('');
    }, []);

    const onChangeCode = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setCode(event.currentTarget.value));
        },
        [dispatch],
    );

    const removeError = () => {
        dispatch(loginActions.setClearStatus());
    };

    const handleSubmitCode = useCallback(async () => {
        validateCode(code);

        if (codeError === '' && resetPhone.length !== 0) {
            const result = await dispatch(fetchCheckResetCode({
                phone: resetPhone,
                code,
                checkCodeApiName: 'check_phone_code',
            }));

            if (result.meta.requestStatus === 'fulfilled') {
                handleChangeStep(AuthSteps.RESET);
            }
        }
    }, [code, codeError, dispatch, handleChangeStep, resetPhone, validateCode]);

    return (
        <VStack
            max
            justify="between"
            align="center"
            className={classNames(styles.CodeStep, {}, [className])}
        >
            <VStack
                max
                gap="24"
            >
                <Text
                    gap="0"
                    text="Код подтверждения"
                    textPrimary
                    variant={TextVariant.TITLE}
                />

                <Text
                    gap="0"
                    text=""
                    textPrimary
                    align={TextAlign.CENTER}
                    variant={TextVariant.SUBTITLE}
                />
                <p className={styles.text}>
                    Введите
                    {' '}
                    <span className={styles.textActive}>последние 4 цифры</span>
                    {' '}
                    номера позвонившего на
                    {' '}
                    {resetPhone}
                </p>

                <Input
                    placeholder="••••"
                    maskChar="•"
                    mask="9999"
                    code
                    value={code}
                    onChange={onChangeCode}
                />
            </VStack>

            <CSSTransition
                in={hasError}
                timeout={300}
                unmountOnExit
                classNames="slide-animation"
            >
                <Error onClose={removeError} error={error || 'Ошибка'} />
            </CSSTransition>

            <VStack
                max
                gap="16"
            >
                <CallCodeInterval phone={resetPhone} recaptcha_token={recaptcha_token} method="reset" />
                <Button
                    onClick={handleSubmitCode}
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
