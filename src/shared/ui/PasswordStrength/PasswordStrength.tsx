import { memo, useCallback } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import Dot from '@/shared/assets/icons/DotIcon.svg';
import Done from '@/shared/assets/icons/DoneIcon.svg';
import styles from './PasswordStrength.module.scss';
import { VStack } from '../Stack/VStack/VStack';
import { Text, TextVariant } from '../Text/Text';

const PasswordStrenthArray = [
    'Минимум 8 символов',
    'Слабый пароль',
    'Средний пароль',
    'Хороший пароль',
    'Надежный пароль',
];

const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
const EightCharsOrMore = /.{8,}/g; // ten characters or more
const TenCharsOrMore = /.{10,}/g; // six characters or more

interface PasswordStrengthProps {
  password: string;
  className: string;
}

export const PasswordStrength = memo(
    ({ className, password }: PasswordStrengthProps) => {
        const passwordTracker = {
            uppercase: password.match(atLeastOneUppercase),
            lowercase: password.match(atLeastOneLowercase),
            number: password.match(atLeastOneNumeric),
            specialChar: password.match(atLeastOneSpecialChar),
            TenCharsOrGreater: password.match(TenCharsOrMore),
            EightCharsOrMore: password.match(EightCharsOrMore),
        };

        const passwordStrength = Object.values(passwordTracker).filter((value) => value).length;

        const renderStrength = useCallback((passwordStrength: number) => {
            switch (passwordStrength) {
            case 0:
                return PasswordStrenthArray[0];
            case 1:
                return PasswordStrenthArray[0];
            case 2:
                return PasswordStrenthArray[1];
            case 3:
                return PasswordStrenthArray[2];
            case 4:
                return PasswordStrenthArray[3];
            case 5:
                return PasswordStrenthArray[4];
            case 6:
                return PasswordStrenthArray[4];
            default:
                return PasswordStrenthArray[0];
            }
        }, []);

        return (
            <VStack
                gap="16"
                align="start"
                className={classNames(styles.PasswordStrength, {}, [className])}
            >
                <Text
                    title={renderStrength(passwordStrength)}
                    gap="0"
                    variant={TextVariant.SUBTITLE}
                />
                <div className={styles.steps}>
                    <span
                        className={classNames(
                            styles.step,
                            { [styles.active]: passwordStrength >= 2 },
                            [],
                        )}
                    />
                    <span
                        className={classNames(
                            styles.step,
                            { [styles.active]: passwordStrength >= 3 },
                            [],
                        )}
                    />
                    <span
                        className={classNames(
                            styles.step,
                            { [styles.active]: passwordStrength >= 4 },
                            [],
                        )}
                    />
                    <span
                        className={classNames(
                            styles.step,
                            { [styles.active]: passwordStrength >= 5 },
                            [],
                        )}
                    />
                </div>

                <Text
                    text="Лучше всего иметь:"
                    gap="0"
                    variant={TextVariant.ADDITIONAL}
                />
                <ul className={styles.list}>
                    <li className={styles.item}>
                        {passwordTracker.uppercase && passwordTracker.lowercase ? (
                            <Done className={styles.done} />
                        ) : (
                            <Dot className={styles.dot} />
                        )}
                        Заглавные и стандартные символы
                    </li>
                    <li className={styles.item}>
                        {passwordTracker.specialChar ? (
                            <Done className={styles.done} />
                        ) : (
                            <Dot className={styles.dot} />
                        )}
                        Символы (#$%^)
                    </li>
                    <li className={styles.item}>
                        {passwordTracker.TenCharsOrGreater ? (
                            <Done className={styles.done} />
                        ) : (
                            <Dot className={styles.dot} />
                        )}
                        Длинный пароль
                    </li>
                    <li className={styles.item}>
                        {passwordTracker.number ? (
                            <Done className={styles.done} />
                        ) : (
                            <Dot className={styles.dot} />
                        )}
                        Цифры (0-9)
                    </li>
                </ul>
            </VStack>
        );
    },
);
