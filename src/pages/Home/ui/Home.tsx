'use client';

import React, { useState } from 'react';

import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { AuthModal, authSlice } from '@/features/auth';
import { HStack } from '@/shared/ui/Stack';
import styles from './Home.module.scss';
import { useAppDispatch } from '@/app/providers/StoreProvider/config/hooks';

const Home = () => {
    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        dispatch(authSlice.actions.setModal(true));
    };

    return (
        <HStack
            max
            justify="center"
            align="center"
            className={styles.wrapper}
        >
            <Button
                theme={ThemeButton.DEFAULT}
                onClick={handleOpenModal}
            >
                Авторизация
            </Button>
            <AuthModal />
        </HStack>
    );
};

export default Home;
