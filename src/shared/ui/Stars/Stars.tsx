/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import StarIcon from '@/shared/assets/icons/StarIcon.svg';
import styles from './Stars.module.scss';
import { HStack } from '../Stack';
import { Text, TextVariant } from '../Text/Text';

interface StarsProps {
  className?: string;
  rating: number;
  isRating: boolean;
  size: number;
}

const getStars = (rating: number, size: number) => new Array(5).fill(0).map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <StarIcon
        className={classNames(styles.star, { [styles.active]: index < rating }, [])}
        key={index}
        style={{
            height: `${size}px`,
            width: `${size}px`,
        }}
    />
));

export const Stars = memo(
    ({
        className, rating, isRating, size,
    }: StarsProps) => {
        if (isRating) {
            return (
                <HStack
                    gap="4"
                    className={classNames(styles.Stars, {}, [className])}
                >
                    {[...Array(5)].map((star, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                className={styles.input}
                            />
                            <StarIcon
                                className={classNames(
                                    styles.star,
                                    { [styles.active]: index < rating },
                                    [],
                                )}
                                style={{
                                    height: `${size}px`,
                                    width: `${size}px`,
                                }}
                            />
                        </label>
                    ))}
                </HStack>
            );
        }

        return (
            <HStack
                gap="4"
                className={classNames(styles.Stars, {}, [className])}
            >

                <Text
                    gap="0"
                    textPrimary
                    variant={TextVariant.TITLE}
                    text={`${rating.toFixed(1)}`}
                />

                <HStack gap="0">
                    {getStars(rating, size)}
                </HStack>

            </HStack>
        );
    },
);
