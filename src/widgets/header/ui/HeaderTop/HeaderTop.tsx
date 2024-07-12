import clsx from 'clsx';
import type { FC } from 'react';
import { HStack } from '@/shared/ui/Stack';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';
import LocationIcon from '@/shared/assets/icons/LocationIcon-2.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { Text, TextVariant } from '@/shared/ui/Text/Text.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import Rustore from '@/shared/assets/icons/RustoreIcon-24.svg';
import Android from '@/shared/assets/icons/AndroidIcon-24.svg';
import Apple from '@/shared/assets/icons/AppleIcon-24.svg';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.svg';
import LikeIcon from '@/shared/assets/icons/LikeIcon.svg';
import MessageIcon from '@/shared/assets/icons/MessageIcon.svg';
import styles from './HeaderTop.module.scss';
import type { Mods } from '@/shared/types';

interface HeaderTopProps {
  isAccountPage?: boolean;
  toggleLocation: () => void;
  handleOpenAuthModal: () => void;
  closeAllModals: () => void;
}

const HeaderTop: FC<HeaderTopProps> = ({
    isAccountPage = false, handleOpenAuthModal, toggleLocation, closeAllModals,
}) => {
    const mods: Mods = {
        [styles.accountPage]: isAccountPage,
    };

    return (
        <MaxContainer>
            <HStack
                justify="between"
                className={clsx(styles.HeaderTop, mods)}
            >
                <Button onClick={toggleLocation}>
                    <HStack
                        gap="16"
                        className={styles.navigate}
                    >
                        <LocationIcon className={styles.icon} />
                        г. Челябинск
                    </HStack>
                </Button>

                <HStack gap="16">
                    <Text
                        gap="0"
                        title="Мобильное приложение CLEEX"
                        variant={TextVariant.MAIN_REGULAR}
                    />
                    <HStack gap="8">
                        <AppLink
                            href="https://www.rustore.ru/catalog/app/com.cleex"
                            target="_blank"
                            className={styles.appLink}
                        >
                            <Rustore />
                        </AppLink>
                        <AppLink
                            href="https://play.google.com/store/apps/details?id=com.cleex"
                            target="_blank"
                            className={styles.appLink}
                        >
                            <Android />
                        </AppLink>
                        <AppLink
                            href="https://apps.apple.com/ru/app/cleex/id6473770758"
                            target="_blank"
                            className={styles.appLink}
                        >
                            <Apple />
                        </AppLink>
                    </HStack>
                </HStack>

                <HStack
                    gap="16"
                    className={styles.accountLinks}
                >
                    <Button onClick={() => { handleOpenAuthModal(); closeAllModals(); }} theme={ThemeButton.ICON}>
                        <ProfileIcon />
                    </Button>
                    <Button theme={ThemeButton.ICON}>
                        <LikeIcon />
                    </Button>
                    <Button theme={ThemeButton.ICON}>
                        <MessageIcon />
                    </Button>
                </HStack>
            </HStack>
        </MaxContainer>
    );
};

export default HeaderTop;
