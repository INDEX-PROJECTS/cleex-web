/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { setHeaderAuthorization } from './authHelper';
import { loginByPhoneNumber } from './loginByPhoneNumber';

interface fetchUserRegistrationProps {
  username: string;
  password: string;
  phoneToken: string;
  phone: string;
  agree: boolean;
}

export const fetchUserRegistration = createAsyncThunk<
  void,
  fetchUserRegistrationProps,
  IStore<string>
>('auth/fetchUserRegistration', async ({
    username, password, phone, phoneToken, agree,
}, { extra: api, rejectWithValue, dispatch }) => {
    try {
        const response = await api.post('auth/registration', {
            name: username,
            password,
            agree,
        }, {
            headers: setHeaderAuthorization(phoneToken),
        });

        if (response.status === 201 && response.data.msg === 'success') {
            dispatch(loginByPhoneNumber({
                phone,
                password,
            }));
        }

        return;
    } catch (error: any) {
        return rejectWithValue(error.response.data.detail.msg);
    }
});
