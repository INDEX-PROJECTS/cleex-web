export enum AuthSteps {
  START = 'start',
  CODE_REGISTRATION = 'code_registration',
  CODE_RESET = 'code_reset',
  RESET_START = 'reset_start',
  RESET = 'reset',
  REGISTRATION = 'registration'
}

export interface AuthSchema {
  modal: boolean;
  notificationModal: boolean;
  notificationText: string;
  currentStep: AuthSteps;
}
