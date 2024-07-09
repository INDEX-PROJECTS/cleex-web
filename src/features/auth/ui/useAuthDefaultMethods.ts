import { useState } from 'react';
import { AuthStep } from '../model/types/loginSchema';

export const useAuthDefaultMethods = (
    step?: AuthStep,
    activeStep?: AuthStep,
) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<string>('');

    const handleClearError = () => {
        setHasError('');
    };

    return {
        hasError,
        isLoading,
        setHasError,
        setIsLoading,
        handleClearError,
    };
};
