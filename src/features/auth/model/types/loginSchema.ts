export interface ValidateDataLogin {
  phone: string[];
  password: string[];
}

export interface ValidateResetPassword {
  resetPassword: string[],
  repeatResetPassword: string[],
}

export interface LoginSchema {
  phone: string;
  password: string;
  isLoading: boolean;
  code: string;
  phone_token: string;
  error?: string | undefined;
  hasError: boolean;
  resetPhone: string;
  resetPassword: string;
  repeatResetPassword: string;
  validateLoginData: ValidateDataLogin;
  validateResetPasswordData: ValidateResetPassword;
}

export interface IAuthTokens {
  refresh_token: string;
  access_token: string;
}
