import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink.tsx';
import { Text, TextVariant } from '@/shared/ui/Text/Text.tsx';
import { HStack, VStack } from '@/shared/ui/Stack';
import Rustore from '@/shared/assets/icons/RustoreIcon-32.svg';
import Android from '@/shared/assets/icons/AndroidIcon-32.svg';
import Apple from '@/shared/assets/icons/AppleIcon-32.svg';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';
import styles from './Footer.module.scss';

export const Footer = () => (
    <div className={styles.Footer}>
        <MaxContainer>
            <HStack
                justify="between"
                align="center"
            >
                <VStack
                    gap="8"
                    align="start"
                >
                    <AppLink
                        href="#"
                        title="Политика конфиденциальности"
                        theme={AppLinkTheme.GRAY}
                    >
                        Политика конфиденциальности
                    </AppLink>
                    <AppLink
                        href="#"
                        title="Пользовательское соглашение"
                        theme={AppLinkTheme.GRAY}
                    >
                        Пользовательское соглашение
                    </AppLink>
                    <AppLink
                        href="#"
                        title="Политика о данных пользователей"
                        theme={AppLinkTheme.GRAY}
                    >
                        Политика о данных пользователей
                    </AppLink>
                    <AppLink
                        href="#"
                        title="Правила сервиса CLEEX"
                        theme={AppLinkTheme.GRAY}
                    >
                        Правила сервиса CLEEX
                    </AppLink>
                </VStack>
                <HStack gap="48">
                    <VStack
                        justify="between"
                        align="start"
                        className={styles.storesBlock}
                    >
                        <Text
                            gap="0"
                            text="Скачать приложение:"
                            variant={TextVariant.DESCRIPTION_REGULAR}
                        />
                        <HStack
                            gap="16"
                            justify="start"
                        >
                            <AppLink
                                href="https://www.rustore.ru/catalog/app/com.cleex"
                                target="_blank"
                                className={styles.btnLink}
                            >
                                <Rustore />
                            </AppLink>
                            <AppLink
                                href="https://play.google.com/store/apps/details?id=com.cleex"
                                target="_blank"
                                className={styles.btnLink}
                            >
                                <Android />
                            </AppLink>
                            <AppLink
                                href="https://apps.apple.com/ru/app/cleex/id6473770758"
                                target="_blank"
                                className={styles.btnLink}
                            >
                                <Apple />
                            </AppLink>
                        </HStack>
                    </VStack>

                    <VStack
                        gap="8"
                        align="start"
                    >
                        <Text
                            gap="0"
                            text="ООО Гуру групп"
                            variant={TextVariant.DESCRIPTION_REGULAR}
                        />
                        <AppLink
                            href="tel:+79191232395"
                            title="+79191232395"
                            theme={AppLinkTheme.GRAY}
                        >
                            +7 919 123 23 95
                        </AppLink>
                        <AppLink
                            href="mailto:info@cleex.ru"
                            title="info@cleex.ru"
                            theme={AppLinkTheme.GRAY}
                        >
                            info@cleex.ru
                        </AppLink>
                        <AppLink
                            href="https://index-studio.ru/"
                            title="index-studio.ru"
                            theme={AppLinkTheme.GRAY}
                            target="_blank"
                        >
                            index-studio.ru
                        </AppLink>
                    </VStack>
                </HStack>
            </HStack>
        </MaxContainer>
    </div>
);
