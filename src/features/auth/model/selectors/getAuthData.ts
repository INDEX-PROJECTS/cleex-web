import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getAuthModal = (state: RootState) => state.auth.modal;

export const getAuthCurrentStep = (state: RootState) => state.auth.currentStep;

export const getAuthNotificationModal = (state: RootState) => state.auth.notificationModal;

export const getAuthNotificationText = (state: RootState) => state.auth.notificationText;
