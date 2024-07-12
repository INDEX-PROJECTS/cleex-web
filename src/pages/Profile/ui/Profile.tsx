/* eslint-disable react/no-array-index-key */

'use client';

import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './Profile.module.scss';
import AnnouncementsGrid from '@/shared/ui/AnnouncementsGrid/AnnouncementsGrid';
import { AnnouncementCard } from '@/entities/announcement';
import { ProfileMenu, ProfileBackground } from '@/features/profileMenu';
import { Text } from '@/shared/ui/Text/Text';
import { TabItem, Tabs, ThemeTab } from '@/shared/ui/Tabs/Tabs';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import ArrowIcon from '@/shared/assets/icons/ArrowIcon.svg';

export const testData = [{
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
},
{
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}, {
    title: 'NFT документы',
    price: '10000',
    address: 'Русакова 5б, кв 68',
    date: '',
    imageUrl: 'https://testengineer.ru/wp-content/uploads/2021/10/chto-takoe-testovaya-dokumentaciya-i-zachem-ona-nuzhna.svg',
}];

const tabsProfile: TabItem[] = [
    { value: 'Активные', content: 'Активные' },
    { value: 'Архивные', content: 'Архивные' },
    { value: 'Черновики', content: 'Черновики' },
];

const Profile = () => {
    const t = 1;

    const currentDATE = new Date();

    const [activeProfileTab, setActiveProfileTab] = useState('Активные');

    const [data, setData] = useState([]);

    const onTabProfileClick = useCallback((tab: TabItem) => {
        setActiveProfileTab(tab.value);
    }, []);

    useEffect(() => {
        axios.get('https://testguru.ru/kvik_v3/api/v1/items').then((res) => {
            setData(res.data.items);
        });
    }, []);

    return (
        <VStack max>
            <ProfileBackground handleChangeBackground={() => {}} />
            <MaxContainer>
                <HStack
                    max
                    align="start"
                    justify="between"
                    gap="32"
                    className={styles.wrapper}
                >
                    <ProfileMenu className={styles.menu} />

                    <VStack align="start" gap="4">
                        <Text gap="0" title="Мои объявления" />
                        <Button className={styles.categoryButton} theme={ThemeButton.LINK}>
                            Искать в категориях
                            <ArrowIcon className={styles.categoryIcon} />
                        </Button>
                        <Tabs
                            tabs={tabsProfile}
                            theme={ThemeTab.MAIN}
                            value={activeProfileTab}
                            onTabClick={onTabProfileClick}
                        />
                        <AnnouncementsGrid>
                            {testData.map((item, index) => (
                                <AnnouncementCard
                                    key={index}
                                    href="#"
                                    test
                                    imageUrl={item.imageUrl}
                                    price={item.price}
                                    title={item.title}
                                    address={item.address}
                                    date={String(currentDATE)}
                                />
                            ))}
                        </AnnouncementsGrid>
                    </VStack>

                </HStack>
            </MaxContainer>

        </VStack>

    );
};

export default Profile;
