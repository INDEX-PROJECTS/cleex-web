import Image from 'next/image';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './HeaderAccount.module.scss';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { HStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input/Input.tsx';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';

interface HeaderAccountProps {
  isCategories: boolean;
  toggleCategories: () => void;
  toggleAutocomplete: () => void;
}

const HeaderAccount: FC<HeaderAccountProps> = ({ isCategories, toggleCategories, toggleAutocomplete }) => (
    <MaxContainer>
        <HStack gap="16" justify="end" className={styles.HeaderAccount}>
            <AppLink href="#">
                <Image
                    src="/assets/images/CleexLogoLight.svg"
                    title="Cleex - сайт объявлений"
                    alt="Cleex - сайт объявлений"
                    width={48}
                    height={48}
                />
            </AppLink>
            <Button theme={ThemeButton.LINK} onClick={toggleCategories}>
                <HStack
                    gap="8"
                    className={styles.category}
                >
                    <div className={styles.burger_wrapper}>
                        <div
                            className={clsx(styles.burger, [isCategories && styles.burger_active])}
                        />
                    </div>
                    Категории
                </HStack>
            </Button>
            <HStack className={styles.search_bar}>
                <Input
                    placeholder="Поиск в Челябинске"
                    className={styles.search_bar_input}
                    onFocus={toggleAutocomplete}
                />
                <Button
                    theme={ThemeButton.DEFAULT}
                    className={styles.search_bar_button}
                >
                    <SearchIcon className={styles.icon} />
                </Button>
            </HStack>
        </HStack>
    </MaxContainer>
);

export default HeaderAccount;
