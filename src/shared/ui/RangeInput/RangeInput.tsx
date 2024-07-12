import { memo } from "react";

import clsx from "clsx";
import styles from "./RangeInput.module.scss";
import { HStack, VStack } from "../Stack";
import { Text, TextVariant } from "../Text/Text";
import type { ChangeEventHandler } from "react";

interface RangeInputProps {
  className?: string;
  title: string;
  max: number;
  min: number;
  step: number;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const RangeInput = memo(
  ({ className, title, max, min, step, value, onChange }: RangeInputProps) => {
    return (
      <VStack
        align="start"
        max={true}
        className={classNames(styles.RangeInput, {}, [className])}>
        <Text
          gap="0"
          variant={TextVariant.MAIN_MEDIUM}
          textPrimary={true}
          title={title}
        />

        <HStack
          max={true}
          gap="50"
          className={styles.field}>
          <Text
            gap="0"
            variant={TextVariant.ADDITIONAL}
            isActive={true}
            title={String(min)}
          />
          <input
            type="range"
            className={styles.input}
            value={value}
            onChange={onChange}
            max={max}
            min={min}
            step={step}
          />
          <Text
            gap="0"
            variant={TextVariant.ADDITIONAL}
            isActive={true}
            title={String(max)}
          />
        </HStack>
      </VStack>
    );
  },
);
