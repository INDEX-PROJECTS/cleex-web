import { ValidateLoginDataError } from '../../types/loginSchema';

export const validateLoginData = (phone: string, password: string) => {
    if (!phone && !password) {
        return [ValidateLoginDataError.EMPTY_DATA];
    }

    const errors: ValidateLoginDataError[] = [];

    if (phone.length < 18 || !phone) {
        errors.push(ValidateLoginDataError.EMPTY_PHONE);
    }

    if (!password) {
        errors.push(ValidateLoginDataError.EMPTY_PASSWORD);
    }

    return errors;
};
