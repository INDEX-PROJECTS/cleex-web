import { Mods } from "@/shared/types";
import { ChangeEventHandler, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import styles from './Input.module.scss';
import clsx from "clsx";
import { Button, ThemeButton } from "../Button/Button";
import EyeClosed from '@/shared/assets/icons/EyeOffIcon.svg';
import EyeOpened from '@/shared/assets/icons/EyeOnIcon.svg';
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholder: string;
  label?: string;
  mask?: string;
  isPassword?: boolean;
  isForgetPassword?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
      className,
      value,
      mask,
      onChange,
      isForgetPassword,
      autofocus,
      readonly,
      placeholder,
      isPassword,
      label,
      type = 'text',
      ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);

  const [isPasswordShown, setPasswordShown] = useState(false);

  const ChangeInputType = isPasswordShown ? 'text' : 'password';

  const mods: Mods = {
      [styles.password]: isPassword,
      [styles.readonly]: readonly,
  };

  useEffect(() => {
      if (autofocus) {
          ref.current?.focus();
      }
  }, [autofocus]);

  return (
      <div className={clsx(styles.FieldBox, {}, [className])}>
          {
              label && (
                  <label htmlFor={placeholder} className={styles.label}>
                      {label}
                  </label>
              )
          }
          <div className={clsx(styles.InputWrapper, mods, [])}>
              <input
                  ref={ref}
                  type={isPassword ? ChangeInputType : type}
                  className={styles.input}
                  id={placeholder}
                  placeholder={placeholder}
                  name={label}
                  value={value}
                  autoComplete="new-password"
                  onChange={onChange}
                  readOnly={readonly}
                  {...otherProps}
              />
              {
                  isPassword && (
                      <Button
                          className={styles.eyeBtn}
                          theme={ThemeButton.ICON}
                          onClick={() => setPasswordShown(!isPasswordShown)}
                      >
                          {isPasswordShown ? <EyeClosed /> : <EyeOpened />}
                      </Button>
                  )
              }
          </div>

      </div>
  );
});