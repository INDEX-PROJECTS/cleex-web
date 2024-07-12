import { memo, useCallback, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './ProfileModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { TabItem, Tabs, ThemeTab } from '@/shared/ui/Tabs/Tabs';
import { DropFileInput } from '@/shared/ui/DropFileInput/DropFileInput';
import { Input } from '@/shared/ui/Input/Input';

interface ProfileModalProps {
  className?: string;
  isOpen: boolean;
  onCloseModal: () => void;
}

const tabsProfileModal: TabItem[] = [
    { value: 'Мои данные', content: 'Мои данные' },
    { value: 'Аватар', content: 'Аватар' },
    { value: 'Обложка', content: 'Обложка' },
];

export const ProfileModal = memo((props: ProfileModalProps) => {
    const { className, isOpen, onCloseModal } = props;

    const [slideIn, setSlideIn] = useState(true);

    const [activeTab, setActiveTab] = useState('Мои данные');

    const handleChangeTab = (value: TabItem) => {
        // setSlideIn(false);

        // setTimeout(() => {
        //     setActiveTab(value.value);
        //     setSlideIn(true);
        // }, 300);
        setActiveTab(value.value);
    };

    const renderModalContent = useCallback((tab: string) => {
        switch (tab) {
        case 'Мои данные':
            return (
                <VStack align="start" max gap="16">
                    <Text gap="0" text="Редактировать данные профиля" />

                    <Input placeholder="Введите имя" />
                    <Input placeholder="Введите фамилию" />

                    <Input placeholder="Укажите город" />
                </VStack>

            );

        case 'Аватар':
            return (

                <VStack align="start" max gap="16">
                    <DropFileInput
                        id="avatar"
                        name="avatar"
                        text="аватар"
                        onChangeText={() => {}}
                        onChangeFile={() => {}}
                    />
                </VStack>
            );

        case 'Обложка':
            return (
                <VStack max>
                    <DropFileInput
                        id="background"
                        name="background"
                        text="обложку"
                        onChangeText={() => {}}
                        onChangeFile={() => {}}
                    />
                </VStack>

            );

        default:
            return (
                <Text gap="0" text="fgdfgdf" />
            );
        }
    }, []);

    return (
        <Modal portal isOpen={isOpen} onClose={onCloseModal} className={classNames(styles.ProfileModal, {}, [className])} isNotification={false}>
            <VStack max gap="16" justify="between" className={styles.wrapper}>
                <Tabs
                    tabs={tabsProfileModal}
                    theme={ThemeTab.MAIN}
                    value={activeTab}
                    variant={TextVariant.DESCRIPTION_MEDIUM}
                    onTabClick={handleChangeTab}
                />

                <VStack max>
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={activeTab}
                            timeout={300}
                            unmountOnExit
                            classNames="fade"
                        >
                            {renderModalContent(activeTab)}
                        </CSSTransition>
                    </SwitchTransition>
                </VStack>

                <HStack max gap="16" justify="start">
                    <Button theme={ThemeButton.SECONDARY} className={styles.btn}>
                        Назад
                    </Button>
                    <Button theme={ThemeButton.DEFAULT} className={styles.btn}>
                        Сохранить
                    </Button>

                </HStack>
            </VStack>
        </Modal>
    );
});
