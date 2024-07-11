export const validatePasswords = (password: string, NewPassword: string) => {
    const passwordErrors: string[] = [];
    const newPasswordErrors: string[] = [];

    if (!password || password.length < 8) {
        passwordErrors.push('Некорректный ввод данных');
    }

    if (!NewPassword || NewPassword.length < 8 || NewPassword !== password) {
        newPasswordErrors.push('Некорректный ввод данных');
    }

    return {
        resetPassword: passwordErrors,
        repeatResetPassword: newPasswordErrors,
    };
};
