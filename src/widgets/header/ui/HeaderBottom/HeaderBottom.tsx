import Image from 'next/image';
import { HStack } from '@/shared/ui/Stack';
import styles from './HeaderBottom.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import CategoryIcon from '@/shared/assets/icons/CategoryIcon.svg';
import { Input } from '@/shared/ui/Input/Input.tsx';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';

const HeaderBottom = () => (
    <MaxContainer>
        <HStack
            gap="16"
            className={styles.HeaderBottom}
        >
            <AppLink href="#">
                <Image
                    src="/assets/images/CleexLogo.svg"
                    title="Cleex - сайт объявлений"
                    alt="Cleex - сайт объявлений"
                    width={64}
                    height={64}
                />
            </AppLink>

            <Button theme={ThemeButton.LINK}>
                <HStack
                    gap="8"
                    className={styles.category}
                >
                    <CategoryIcon />
                    Категории
                </HStack>
            </Button>

            <HStack className={styles.search_bar}>
                <Input
                    placeholder="Поиск в Челябинске"
                    className={styles.search_bar_input}
                />
                <Button
                    theme={ThemeButton.DEFAULT}
                    className={styles.search_bar_button}
                >
                    <SearchIcon className={styles.icon} />
                </Button>
            </HStack>

            <Button theme={ThemeButton.DEFAULT}>Разместить объявление</Button>
        </HStack>
    </MaxContainer>
);

export default HeaderBottom;
