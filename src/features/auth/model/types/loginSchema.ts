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

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export type AuthStep = '' | 'login' | 'phone' | 'code' | 'password';

export type AuthModalType =
  | ''
  | 'selectMethods'
  | 'login'
  | 'registration'
  | 'reset'
  | 'confirmPhone';

export type StepsType = 'registration' | 'reset-password';
