/* eslint-disable no-useless-return */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { setHeaderAuthorization } from './authHelper';

interface fetchUserResetPasswordProps {
  new_password: string;
  phoneToken: string;
}

export const fetchUserResetPassword = createAsyncThunk<
  void,
  fetchUserResetPasswordProps,
  IStore<string>
>('login/fetchUserResetPassword', async ({
    new_password, phoneToken,
}, { extra: api, rejectWithValue }) => {
    try {
        const response = await api.post('auth/reset-password', {
            new_password,
        }, {
            headers: setHeaderAuthorization(phoneToken),
        });

        if (response.status === 200 && response.data.msg === 'success') {
            return;
        }

        return;
    } catch (error: any) {
        return rejectWithValue(error.response.data.detail.msg);
    }
});
