export const validateRegistrationData = (username: string, password: string) => {
    const passwordErrors: string[] = [];
    const usernameErrors: string[] = [];

    // Валидация номера телефона

    if (username.length < 3) {
        usernameErrors.push('Некорректный ввод данных');
    }

    if (!password || password.length < 8) {
        passwordErrors.push('Некорректный ввод данных');
    }

    return {
        password: passwordErrors,
        username: usernameErrors,
    };
};
