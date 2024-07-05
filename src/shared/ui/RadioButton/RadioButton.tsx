import { memo, useState } from "react";
import clsx from "clsx";
import styles from "./RadioButton.module.scss";

interface RadioButtonProps {
  className?: string;
  id: string;
}

export const RadioButton = memo((props: RadioButtonProps) => {
  const { className, id } = props;

  const [checked, setChecked] = useState(false);
  return (
    <div className={clsx(styles.RadioButton, {}, [className])}>
      <input
        id={id}
        name="radio"
        type="radio"
        checked={checked}
        onClick={() => {
          return setChecked(!checked);
        }}
        className={styles.input}
      />
      <label
        htmlFor={id}
        className={styles.label}>
        Checked
      </label>
    </div>
  );
});
