'use client';

import React, { useState } from 'react';

import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { AuthModal, authSlice, getAuthModal } from '@/features/auth';
import { HStack } from '@/shared/ui/Stack';
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks';

const Home = () => {
    const dispatch = useAppDispatch();

    const modal = useAppSelector(getAuthModal);

    const handleOpenModal = () => {
        dispatch(authSlice.actions.setModal(true));
    };

    const handleCloseModal = () => {
        dispatch(authSlice.actions.setModal(false));
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
            <AuthModal isOpen={modal} onCloseModal={handleCloseModal} />
        </HStack>
    );
};

export default Home;
