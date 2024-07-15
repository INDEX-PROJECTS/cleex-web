export const validateRegistrationData = (name: string, password: string) => {
    const passwordErrors: string[] = [];
    const nameErrors: string[] = [];

    // Валидация номера телефона

    if (name.length < 3) {
        nameErrors.push('Некорректный ввод данных');
    }

    if (!password || password.length < 8) {
        passwordErrors.push('Некорректный ввод данных');
    }

    return {
        password: passwordErrors,
        name: nameErrors,
    };
};
