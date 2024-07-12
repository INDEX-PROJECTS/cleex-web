import { memo } from "react";
import clsx from "clsx";
import styles from "./Toggle.module.scss";
import type { ChangeEventHandler } from "react";

interface ToggleProps {
  className?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Toggle = memo(({ className, onChange, value }: ToggleProps) => {
  return (
    <label className={classNames(styles.ToggleContainer, {}, [className])}>
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <span className={styles.switcher} />
    </label>
  );
});
