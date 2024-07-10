/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { getStandardNumber } from '@/shared/utils/getStandardNumber/getStandardNumber';

interface fetchCallPhoneProps {
  phone: string;
  recaptcha_token: string;
  method: 'registration' | 'reset-password';
}

export const fetchCallPhone = createAsyncThunk<
  void,
  fetchCallPhoneProps,
  IStore<string>
>('auth/fetchCallPhone', async ({ phone, recaptcha_token, method }, { extra: api, rejectWithValue }) => {
    try {
        const response = await api.post(`phone/${method}`, {
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
