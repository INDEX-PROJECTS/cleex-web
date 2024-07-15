/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from 'react';
import { getRecallTiming } from '@/shared/utils/getRecallTiming/getRecalTiming';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { getRegistrationError, getRegistrationHasError, getRegistrationIsLoading } from '../../../model/selectors/getRegistrationData';
import { getLoginError, getLoginHasError, getLoginIsLoading } from '../../../model/selectors/getLoginData';
import { fetchRegistrationCallPhone } from '../../../model/services/fetchCallPhone/fetchRegistrationCallPhone';
import { fetchResetCallPhone } from '../../../model/services/fetchCallPhone/fetchResetCallPhone';
import { registrationActions } from '../../../model/slice/registrationSlice';
import { loginActions } from '../../../model/slice/loginSlice';

let interval: NodeJS.Timeout | undefined;

export const useCallCodeInteval = (phone: string, recaptcha_token: string | null, method: 'registration' | 'reset') => {
    const updateCount = useRef(0);

    const dispatch = useAppDispatch();

    const [timeRemaining, setTimeRemaining] = useState(
        getRecallTiming(updateCount.current),
    );

    const isLoadingRegistration = useAppSelector(getRegistrationIsLoading);

    const isLoadingReset = useAppSelector(getLoginIsLoading);

    const errorRegistration = useAppSelector(getRegistrationError);

    const errorReset = useAppSelector(getLoginError);

    const hasErrorRegistration = useAppSelector(getRegistrationHasError);

    const hasErrorReset = useAppSelector(getLoginHasError);

    const handleClearStatusRegistration = () => {
        dispatch(registrationActions.setClearStatus());
    };

    const handleClearStatusReset = () => {
        dispatch(loginActions.setClearStatus());
    };

    const handleRentryCall = () => {
        if (method === 'registration' && recaptcha_token) {
            dispatch(fetchRegistrationCallPhone({
                phone,
                recaptcha_token,
            }));
        } else if (method === 'reset' && recaptcha_token) {
            dispatch(fetchResetCallPhone({
                phone,
                recaptcha_token,
            }));
        }
    };

    useEffect(() => {
        if (!timeRemaining) {
            clearInterval(interval);
            return;
        }
        interval = setInterval(() => {
            setTimeRemaining((prevState) => {
                const result = prevState - 1;
                if (result <= 0) {
                    clearInterval(interval);
                }
                return result;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timeRemaining]);

    return {
        timeRemaining,
        handleRentryCall,
        isLoading: method === 'registration' ? isLoadingRegistration : isLoadingReset,
        error: method === 'registration' ? errorRegistration : errorReset,
        hasError: method === 'registration' ? hasErrorRegistration : hasErrorReset,
        handleClearStatus: method === 'registration' ? handleClearStatusRegistration : handleClearStatusReset,
    };
};
