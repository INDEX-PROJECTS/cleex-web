import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getAuthModal = (state: RootState) => state.auth.modal;

export const getAuthCurrentStep = (state: RootState) => state.auth.currentStep;
