'use client';

import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import HeaderBottom from '../HeaderBottom/HeaderBottom.tsx';
import HeaderTop from '../HeaderTop/HeaderTop.tsx';
import styles from './Header.module.scss';
import HeaderAccount from '../HeaderAccount/HeaderAccount.tsx';
import { Mods } from '@/shared/types';
import ConfirmLocation from '../ConfirmLocation/ConfirmLocation.tsx';
import Categories from '../Categories/Categories.tsx';
import Backdrop from '../Backdrop/Backdrop.tsx';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/config/hooks.ts';
import { AuthModal, authSlice, getAuthModal } from '@/features/auth';

interface HeaderProps {
  isAccountPage?: boolean;
}

export const Header: FC<HeaderProps> = ({ isAccountPage = false }) => {
    const [isLocation, setIsLocation] = useState(false);
    const [isCategories, setIsCategories] = useState(false);
    const [isAutocomplete, setIsAutocomplete] = useState(false);

    const dispatch = useAppDispatch();

    const authModal = useAppSelector(getAuthModal);

    const handleOpenAuthModal = () => {
        dispatch(authSlice.actions.setModal(true));
    };

    const handleCloseAuthModal = () => {
        dispatch(authSlice.actions.setModal(false));
    };

    const mods: Mods = {
        [styles.isAccountPage]: isAccountPage,
    };

    const toggleLocation = (open: boolean) => {
        setIsLocation(open);
        setIsCategories(false);
        setIsAutocomplete(false);
    };

    const toggleCategories = (open: boolean) => {
        setIsLocation(false);
        setIsCategories(open);
        setIsAutocomplete(false);
    };

    const toggleAutocomplete = (open: boolean) => {
        setIsLocation(false);
        setIsCategories(false);
        setIsAutocomplete(open);
    };

    useEffect(() => {
        if (isLocation || isCategories || isAutocomplete) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLocation, isCategories, isAutocomplete]);

    return (
        <div className={clsx(styles.Header, mods)}>
            <CSSTransition
                in={isCategories}
                timeout={300}
                classNames={{
                    enter: styles['shadow-enter'],
                    enterActive: styles['shadow-enter-active'],
                    enterDone: styles['shadow-enter-done'],
                    exit: styles['shadow-exit'],
                    exitActive: styles['shadow-exit-active'],
                }}
            >
                <div className={clsx(styles.Header_wrapper)}>
                    <HeaderTop
                        handleOpenAuthModal={handleOpenAuthModal}
                        isAccountPage={isAccountPage}
                        toggleLocation={() => toggleLocation(!isLocation)}
                    />
                    {
                        isAccountPage
                            ? (
                                <HeaderAccount
                                    isCategories={isCategories}
                                    toggleCategories={() => toggleCategories(!isCategories)}
                                    toggleAutocomplete={() => toggleAutocomplete(!isAutocomplete)}
                                />
                            )
                            : (
                                <HeaderBottom
                                    isCategories={isCategories}
                                    toggleCategories={() => toggleCategories(!isCategories)}
                                    isAutocomplete={isAutocomplete}
                                    toggleAutocomplete={toggleAutocomplete}
                                />
                            )
                    }
                </div>
            </CSSTransition>
            <ConfirmLocation isOpen={isLocation} toggleLocation={() => toggleLocation(false)} />
            <Categories isOpen={isCategories} toggleCategories={() => toggleCategories(false)} />
            <Backdrop isOpen={isAutocomplete} />
            <AuthModal isOpen={authModal} onCloseModal={handleCloseAuthModal} />
        </div>
    );
};
