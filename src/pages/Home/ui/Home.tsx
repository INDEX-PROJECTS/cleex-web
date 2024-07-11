/* eslint-disable react/no-array-index-key */

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VStack } from '@/shared/ui/Stack';
import styles from './Home.module.scss';
import AnnouncementsGrid from '@/shared/ui/AnnouncementsGrid/AnnouncementsGrid';
import { AnnouncementCard } from '@/entities/announcement';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

const Home = () => {
    const currentDATE = new Date();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://testguru.ru/kvik_v3/api/v1/items').then((res) => {
            setData(res.data.items);
        });
    }, []);

    return (
        <VStack
            max
            gap="32"
            className={styles.wrapper}
        >
            <AnnouncementsGrid>
                {data.map((item) => (
                    <AnnouncementCard
                        key={item.id}
                        href="#"
                        imageUrl={item.photos}
                        price={item.price}
                        title={item.title}
                        address={item.location.address}
                        date={item.created_at}
                    />
                ))}
            </AnnouncementsGrid>

            <Button theme={ThemeButton.DEFAULT} className={styles.loadMore}>Показать еще</Button>

        </VStack>
    );
};

export default Home;
