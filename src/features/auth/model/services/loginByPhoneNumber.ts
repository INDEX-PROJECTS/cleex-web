import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { getStandardNumber } from '@/shared/utils/getStandardNumber/getStandardNumber';
import { saveTokensStorage } from './authHelper';

interface LoginByPhoneNumberProps {
  phone: string;
  password: string;
}

export const loginByPhoneNumber = createAsyncThunk<
  string | boolean,
  LoginByPhoneNumberProps,
  IStore<string>
>('auth/loginByPhoneNumber', async ({ phone, password }, { extra: api, rejectWithValue }) => {
    try {
        const deviceInfo = JSON.stringify({
            os: 'web',
            brand: '',
            model: '',
            deviceId: '',
            manufacturer: '',
            fingerprint: '',
            ip: '',
            userAgent: '',
            uniqueId: '',
            token: '',
        });
        const phoneNonePlus = getStandardNumber(phone, false);

        let result = false;

        const data: string[] = [
            'grant_type=',
            'scope=',
            'client_id=',
            'client_secret=',
            `username=%2B${phoneNonePlus}`,
            `password=${password}`,
            `device=${deviceInfo || {}}`,
        ];

        const response = await api.request({
            url: '/auth/login',
            method: 'post',
            auth: {
                username: phoneNonePlus,
                password,
            },
            data: data.join('&'),
        });

        if (response.status === 200) {
            saveTokensStorage(response.data);
            result = true;
        }

        return result;
    } catch (error: any) {
        return rejectWithValue(error.response.data.detail.msg);
    }
});
