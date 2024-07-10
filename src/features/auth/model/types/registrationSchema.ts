export interface ValidateDataRegistration {
  username: string[];
  password: string[];
}

export interface RegistrationSchema {
  phone: string;
  code: string;
  username: string;
  token: string | null;
  password: string;
  phone_token: string;
  isLoading: boolean;
  error?: string | undefined;
  currentStep: number;
  hasError: boolean,
  validateData: ValidateDataRegistration;
}
