import { useController, UseControllerReturn, useForm } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { LoginSchema } from '../../model/types/loginSchema';

interface ILoginForm extends Pick<LoginSchema, 'phone' | 'password'> {}

export const useLoginFrom = () => {
    // ? auth method
    const dispatch = useAppDispatch();

    //* ** form ***//
    const { control, handleSubmit, reset } = useForm<ILoginForm>();

    const phoneController = useController({
        control,
        name: 'phone',
        rules: { required: true },
    });

    const phone = phoneController.field.value;

    // ? password controller
    const passwordController = useController({
        control,
        name: 'password',
        rules: { required: true },
    });

    const onChange = <T extends keyof ILoginForm>(
        controller: UseControllerReturn<ILoginForm, T>,
    ) => (e: ChangeEvent<HTMLInputElement>) => {
            if (hasError) {
                setHasError('');
            }
            controller.field.onChange(e.nativeEvent.text);
        };
};
