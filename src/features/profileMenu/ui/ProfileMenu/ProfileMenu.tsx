import { memo } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './ProfileMenu.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import Avatar, { AvatarSize } from '@/shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import EditIcon from '@/shared/assets/icons/EditPencilIcon.svg';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { Stars } from '@/shared/ui/Stars/Stars';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

interface ProfileMenuProps {
  className?: string;
  onModalOpen: () => void;
}

export const ProfileMenu = memo((props: ProfileMenuProps) => {
    const { className, onModalOpen } = props;
    return (
        <VStack gap="16" className={classNames(styles.ProfileMenu, {}, [className])}>
            <HStack align="center" justify="center" className={styles.avatarContainer}>
                <Avatar size={AvatarSize.SIZE88} name="Артем Шабанов" />
                <Button onClick={onModalOpen} position={styles.editButtonPosition} className={styles.editButton} helper helperText="Редактировать" theme={ThemeButton.ICON_BG}>
                    <EditIcon className={styles.editIcon} />
                </Button>
            </HStack>

            <VStack gap="0" align="center">
                <Text gap="0" textPrimary variant={TextVariant.TITLE} text="Анастасия" />
                <Text gap="0" textPrimary variant={TextVariant.TITLE} text="Штракбеин" />

                <VStack gap="4" align="center">
                    <Stars rating={5} isRating={false} size={24} />
                    <Text gap="0" variant={TextVariant.ADDITIONAL} text="(4 отзыва)" />
                </VStack>
            </VStack>

            <Button theme={ThemeButton.DEFAULT}>
                Разместить объявление
            </Button>

            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.DARK} href="#">Мои объявление</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.DARK} href="#">Мои отзывы</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.MAIN} href="#">Избранное</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.DARK} href="#">Сообщения</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.DARK} href="#">Уведомления</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.DARK} href="#">Настройка</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink theme={AppLinkTheme.ERROR} href="#">Выйти</AppLink>
                </li>
            </ul>
        </VStack>
    );
});
