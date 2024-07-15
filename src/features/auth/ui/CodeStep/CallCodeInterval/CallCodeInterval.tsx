/* eslint-disable camelcase */
import {
    memo,
} from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import { convertSecToMinAndSce } from '@/shared/utils/getRecallTiming/getRecalTiming';
import { useCallCodeInteval } from './useCallCodeInterval';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal/Modal';

interface CallCodeIntervalProps {
  className?: string;
  phone: string;
  recaptcha_token: string | null;
  method: 'registration' | 'reset'
}

export const CallCodeInterval = memo((props: CallCodeIntervalProps) => {
    const {
        className, phone, recaptcha_token, method,
    } = props;

    const {
        isLoading,
        error,
        timeRemaining,
        handleRentryCall,
        handleClearStatus,
        hasError,
    } = useCallCodeInteval(phone, recaptcha_token, method);

    return (
        <div>
            {
                timeRemaining ? (
                    <Text
                        gap="0"
                        variant={TextVariant.ADDITIONAL}
                        text={
                            `Повторить попытку через ${convertSecToMinAndSce(timeRemaining)}`
                        }
                    />
                ) : (
                    <Button disabled={isLoading} onClick={handleRentryCall} theme={ThemeButton.LINK}>
                        Позвонить еще раз
                    </Button>
                )
            }
            <Modal isNotification portal isOpen={hasError} onClose={handleClearStatus}>
                <Text gap="0" variant={TextVariant.ADDITIONAL} text={error || 'Ошибка'} />
                <Button onClick={handleClearStatus} fullWidth theme={ThemeButton.DEFAULT}>
                    Хорошо
                </Button>
            </Modal>
        </div>
    );
});
