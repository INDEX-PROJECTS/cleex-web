export interface RegistrationSchema {
  phone: string;
  code: string;
  username: string;
  token: string | null;
  password: string;
  isLoading: boolean;
  error?: string;
}
