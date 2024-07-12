/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import { CSSTransition } from 'react-transition-group';
import { Tabs } from '@/shared/ui/Tabs/Tabs';
import { VStack } from '@/shared/ui/Stack';
import styles from './LoginRegistrationStep.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import type { TabItem } from '@/shared/ui/Tabs/Tabs';
import { AuthSteps } from '../../model/types/authSchema';

interface LoginRegistrationStepProps {
  className?: string;
  handleChangeStep: (currentStep: AuthSteps) => void;
}

const tabs: TabItem[] = [
    { value: 'Вход', content: 'Вход' },
    { value: 'Регистрация', content: 'Регистрация' },
];

export const LoginRegistrationStep = memo(
    (props: LoginRegistrationStepProps) => {
        const { className, handleChangeStep } = props;

        const [activeTab, setActiveTab] = useState('Вход');

        const [slideIn, setSlideIn] = useState(true);

        const onTabClick = useCallback((tab: TabItem) => {
            setSlideIn(false);

            setTimeout(() => {
                setActiveTab(tab.value);
                setSlideIn(true);
            }, 300);
        }, []);

        const renderForm = useCallback((value: string) => {
            switch (value) {
            case 'Вход':
                return <LoginForm handleChangeStep={handleChangeStep} />;

            case 'Регистрация':
                return <RegistrationForm handleChangeStep={handleChangeStep} />;
            }
        }, [handleChangeStep]);

        return (
            <VStack
                gap="24"
                max
                className={classNames(styles.LoginRegistrationStep, {}, [className])}
            >
                <Tabs
                    tabs={tabs}
                    value={activeTab}
                    onTabClick={onTabClick}
                />

                <CSSTransition
                    in={slideIn}
                    timeout={300}
                    unmountOnExit
                    classNames="slide-animation"
                >
                    {renderForm(activeTab)}
                </CSSTransition>
            </VStack>
        );
    },
);
