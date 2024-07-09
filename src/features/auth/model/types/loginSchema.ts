export enum ValidateLoginDataError {
  EMPTY_PASSWORD = 'Некорректные данные для входа',
  EMPTY_PHONE = 'Некорректные данные для входа',
  EMPTY_DATA = 'Некорректный ввод данных',
}

export interface LoginSchema {
  phone: string;
  password: string;
  isLoading: boolean;
  error?: string;
  resetPassword: string;
  repeatResetPassword: string;
  validateData: ValidateLoginDataError[];
}

export interface IAuthTokens {
  refresh_token: string;
  access_token: string;
}
