/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { getStandardNumber } from '@/shared/utils/getStandardNumber/getStandardNumber';

interface fetchRegistrationCallPhoneProps {
  phone: string;
  recaptcha_token: string;
}

export const fetchRegistrationCallPhone = createAsyncThunk<
  void,
  fetchRegistrationCallPhoneProps,
  IStore<string>
>('registration/fetchRegistrationCallPhone', async ({ phone, recaptcha_token }, { extra: api, rejectWithValue }) => {
    try {
        const response = await api.post('phone/registration', {
            phone: getStandardNumber(phone),
            recaptcha_token,
        });

        if (response.data.msg === 'success' && response.status === 200) {
            return;
        }

        return;
    } catch (error: any) {
        return rejectWithValue(error.response.data.detail.msg);
    }
});
