export interface ValidateDataLogin {
  phone: string[];
  password: string[];
}

export interface LoginSchema {
  phone: string;
  password: string;
  isLoading: boolean;
  error?: string | undefined;
  hasError: boolean;
  resetPhone: string;
  resetPassword: string;
  repeatResetPassword: string;
  validateData: ValidateDataLogin;
}

export interface IAuthTokens {
  refresh_token: string;
  access_token: string;
}
