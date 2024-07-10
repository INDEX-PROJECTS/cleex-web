export enum AuthSteps {
  START = 'start',
  CODE = 'code',
  RESET_START = 'reset_start',
  RESET = 'reset',
  REGISTRATION = 'registration'
}

export interface AuthSchema {
  modal: boolean;
  currentStep: AuthSteps;
}
