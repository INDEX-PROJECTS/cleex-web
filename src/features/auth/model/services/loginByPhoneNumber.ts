import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITokens } from '../types/loginSchema';

interface LoginByPhoneNumberProps {
  phone: string;
  password: string;
  token: string;
}

export const loginByPhoneNumber = createAsyncThunk<
  ITokens,
  LoginByPhoneNumberProps,
  { rejectValue: string }
>('auth/loginByPhoneNumber', async (authData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post<ITokens>('auth/login', authData);

        if (!data) {
            return rejectWithValue('Нет данных в ответе');
        }

        return data;
    } catch (error: any) {
        return rejectWithValue(error.response.data.message);
    }
});
