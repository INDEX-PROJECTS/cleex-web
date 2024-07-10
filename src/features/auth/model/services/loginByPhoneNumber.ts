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
        const phoneNonePlus = getStandardNumber(phone, false);

        let result = false;

        const data: string[] = [
            'grant_type=',
            'scope=',
            'client_id=',
            'client_secret=',
            `username=%2B${phoneNonePlus}`,
            `password=${password}`,
            `device=${{}}`,
        ];

        const response = await axios.post('https://testguru.ru/kvik_v3/api/v1/auth/login', data.join('&'));

        if (response.status === 200) {
            saveTokensStorage(response.data);
            result = true;
        }

        return result;
    } catch (error: any) {
        return rejectWithValue(error.response.data.msg);
    }
});
