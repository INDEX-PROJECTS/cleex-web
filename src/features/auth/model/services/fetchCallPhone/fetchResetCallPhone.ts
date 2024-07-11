/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { getStandardNumber } from '@/shared/utils/getStandardNumber/getStandardNumber';

interface fetchResetCallPhoneProps {
  phone: string;
  recaptcha_token: string;
}

export const fetchResetCallPhone = createAsyncThunk<
  void,
  fetchResetCallPhoneProps,
  IStore<string>
>('login/fetchResetCallPhone', async ({ phone, recaptcha_token }, { extra: api, rejectWithValue }) => {
    try {
        const response = await api.post('phone/reset-password', {
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
