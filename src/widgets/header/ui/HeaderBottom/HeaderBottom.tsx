import Image from 'next/image';
import {
    FC, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';
import { HStack } from '@/shared/ui/Stack';
import styles from './HeaderBottom.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';
import CloseIcon from '@/shared/assets/icons/CloseIcon.svg';
import Autocomplete from '../Autocomplete/Autocomplete.tsx';

interface HeaderBottomProps {
  isCategories: boolean;
  toggleCategories: () => void;
  isAutocomplete: boolean;
  toggleAutocomplete: (arg: boolean) => void;
}

const HeaderBottom: FC<HeaderBottomProps> = ({
    isCategories, toggleCategories, isAutocomplete, toggleAutocomplete,
}) => {
    const [value, setValue] = useState('');

    const [check, setCheck] = useState(false);

    const [visibleClose, setVisibleClose] = useState(false);

    const inputRef = useRef(null);

    const ClearInput = () => {
        setValue('');
        setCheck(true);
    };

    useEffect(() => {
        if (value !== '') {
            setVisibleClose(true);
        } else {
            setVisibleClose(false);
        }
    }, [value]);

    return (
        <MaxContainer>
            <HStack
                gap="16"
                className={styles.HeaderBottom}
            >
                <AppLink href="#" className={styles.logo}>
                    <Image
                        src="/assets/images/CleexLogo.svg"
                        title="Cleex - сайт объявлений"
                        alt="Cleex - сайт объявлений"
                        width={64}
                        height={64}
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
                <div className={styles.search_bar} ref={inputRef}>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Поиск в Челябинске"
                        className={styles.search_bar_input}
                        onClick={() => toggleAutocomplete(true)}
                        onBlur={() => setCheck(false)}
                        adornment={visibleClose ? <CloseIcon /> : undefined}
                        autofocus={check}
                        adornmentAction={ClearInput}
                    />
                    <Button
                        theme={ThemeButton.DEFAULT}
                        className={styles.search_bar_button}
                    >
                        <SearchIcon className={styles.icon} />
                    </Button>

                    <Autocomplete isOpen={isAutocomplete} toggleAutocomplete={() => toggleAutocomplete(false)} inputRef={inputRef} />
                </div>

                <Button theme={ThemeButton.DEFAULT}>Разместить объявление</Button>
            </HStack>
        </MaxContainer>
    );
};

export default HeaderBottom;
