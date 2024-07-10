export const REG_EXP_STRIP_ALL_NON_NUMBERS = /\D/g;

export const getStandardNumber = (phone: string, isPlus = true) => (isPlus ? '+' : '') + phone.replace(REG_EXP_STRIP_ALL_NON_NUMBERS, '');
