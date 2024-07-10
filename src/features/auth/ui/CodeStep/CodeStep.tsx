import {
    ChangeEvent, memo, useCallback, useState,
} from 'react';
import clsx from 'clsx';
import { VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Text, TextAlign, TextVariant } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import styles from './CodeStep.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { getRegistrationCode, getRegistrationIsLoading, getRegistrationPhone } from '../../model/selectors/getRegistrationData';
import { registrationActions } from '../../model/slice/registrationSlice';
import { fetchCheckCode } from '../../model/services/fetchCheckCode';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { AuthSteps } from '../../model/types/authSchema';

interface CodeStepProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

export const CodeStep = memo((props: CodeStepProps) => {
    const { className, handleChangeStep } = props;

    const dispatch = useAppDispatch();

    const [codeError, setCodeError] = useState('');

    const phone = useAppSelector(getRegistrationPhone);
    const code = useAppSelector(getRegistrationCode);
    const isLoading = useAppSelector(getRegistrationIsLoading);

    const validateCode = useCallback((code: string) => {
        if (!code || code.length !== 4) {
            return setCodeError('Некорректный ввод данных');
        }

        return setCodeError('');
    }, []);

    const onChangeCode = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(registrationActions.setCode(event.currentTarget.value));
        },
        [dispatch],
    );

    const handleSubmitCode = useCallback(async () => {
        validateCode(code);

        if (codeError === '' && phone.length !== 0) {
            const result = await dispatch(fetchCheckCode({
                phone,
                code,
                checkCodeApiName: 'check_phone_code',
            }));

            if (result.meta.requestStatus === 'fulfilled') {
                handleChangeStep(AuthSteps.REGISTRATION);
            }
        }
    }, [code, codeError, dispatch, handleChangeStep, phone, validateCode]);

    return (
        <VStack
            max
            justify="between"
            align="center"
            className={clsx(styles.CodeStep, {}, [className])}
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
                    {phone}
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

            <VStack
                max
                gap="16"
            >
                <Button
                    fullWidth
                    theme={ThemeButton.LINK}
                >
                    Позвонить еще раз
                </Button>
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
