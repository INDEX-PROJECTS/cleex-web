/* eslint-disable react/no-array-index-key */
import { memo } from "react";
import clsx from "clsx";
import StarIcon from "@/shared/assets/icons/StarIcon.svg";
import styles from "./Stars.module.scss";
import { HStack } from "../Stack";
import { Text, TextVariant } from "../Text/Text";

interface StarsProps {
  className?: string;
  rating: number;
  isRating: boolean;
  size: number;
}

const getStars = (rating: number, size: number) => {
  return new Array(5).fill(0).map((item, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <StarIcon
        className={clsx(styles.star, { [styles.active]: index < rating }, [])}
        key={index}
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      />
    );
  });
};

export const Stars = memo(
  ({ className, rating, isRating, size }: StarsProps) => {
    if (isRating) {
      return (
        <HStack
          gap="8"
          className={clsx(styles.Stars, {}, [className])}>
          {[...Array(5)].map((star, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  className={styles.input}
                />
                <StarIcon
                  className={clsx(
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
            );
          })}
        </HStack>
      );
    }

    return (
      <HStack
        gap="8"
        className={clsx(styles.Stars, {}, [className])}>
        <Text
          gap="0"
          textPrimary={true}
          variant={TextVariant.TITLE}
          text={`${rating}`}
        />
        {getStars(rating, size)}
      </HStack>
    );
  },
);