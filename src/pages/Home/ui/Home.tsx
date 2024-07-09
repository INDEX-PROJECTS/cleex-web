'use client';

import React, { useState } from 'react';

import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { AuthModal } from '@/features/auth';
import { HStack } from '@/shared/ui/Stack';
import styles from './Home.module.scss';

const Home = () => {
    const [modal, setModal] = useState(false);

    const onCloseModal = () => {
        setModal(false);
    };

    const onOpenModal = () => {
        setModal(true);
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
                onClick={onOpenModal}
            >
                Авторизация
            </Button>
            <AuthModal
                portal
                isOpen={modal}
                onClose={onCloseModal}
            />
        </HStack>
    );
};

export default Home;
