/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStore } from '@/app/providers/StoreProvider/config/store';
import { getStandardNumber } from '@/shared/utils/getStandardNumber/getStandardNumber';

interface fetchCheckRegistrationCodeProps {
  phone: string;
  code: string;
  checkCodeApiName: string;
}

export const fetchCheckRegistrationCode = createAsyncThunk<
  string,
  fetchCheckRegistrationCodeProps,
  IStore<string>
>('login/fetchCheckRegistrationCode', async ({
    phone, code, checkCodeApiName,
}, { extra: api, rejectWithValue }) => {
    try {
        const response = await api.get(`phone/${checkCodeApiName}/${getStandardNumber(phone)}/${code}`);

        if (response.status === 200) {
            return response.data.phone_token;
        }

        return;
    } catch (error: any) {
        return rejectWithValue(error.response.data.detail.msg);
    }
});
