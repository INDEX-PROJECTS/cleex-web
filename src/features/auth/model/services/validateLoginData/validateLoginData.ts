export const validateLoginData = (phone: string, password: string) => {
    const phoneErrors: string[] = [];
    const passwordErrors: string[] = [];

    // Валидация номера телефона
    if (!phone) {
        phoneErrors.push('Некорректный ввод данных');
    } else if (phone.length !== 18) {
        phoneErrors.push('Некорректный ввод данных');
    }

    // Валидация пароля
    if (!password) {
        passwordErrors.push('Некорректный ввод данных');
    }

    return {
        phone: phoneErrors,
        password: passwordErrors,
    };
};
