'use client';

/* eslint-disable react/display-name */
import {
    memo, ReactElement, useEffect, useRef, useState,
} from 'react';
import clsx from 'clsx';
import InputMask from 'react-input-mask';
import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { JSXElement } from '@babel/types';
import EyeClosed from '@/shared/assets/icons/EyeOffIcon.svg';
import EyeOpened from '@/shared/assets/icons/EyeOnIcon.svg';
import styles from './Input.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import type { Mods } from '@/shared/types';
import { Text, TextVariant } from '../Text/Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholder: string;
  label?: string;
  mask?: string;
  error?: boolean;
  errorText?: string;
  maskChar?: string;
  code?: boolean;
  isPassword?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  autofocus?: boolean;
  readonly?: boolean;
  adornment?: ReactElement;
  adornmentAction?: () => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        mask,
        code,
        errorText,
        autofocus,
        error,
        readonly,
        placeholder,
        isPassword,
        maskChar,
        label,
        type = 'text',
        adornment,
        adornmentAction,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement | null>(null);

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const ChangeInputType = isPasswordShown ? 'text' : 'password';

    const mods: Mods = {
        [styles.password]: isPassword,
        [styles.readonly]: readonly,
        [styles.error]: error,
        [styles.code]: code,
    };

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    if (mask) {
        return (
            <div className={clsx(styles.FieldBox, {}, [className])}>
                {label && (
                    <label
                        htmlFor={placeholder}
                        className={styles.label}
                    >
                        {label}
                    </label>
                )}
                <div className={clsx(styles.InputWrapper, mods, [])}>
                    <InputMask
                        mask={mask}
                        id={placeholder}
                        placeholder={placeholder}
                        maskChar={maskChar}
                        name={label}
                        value={value}
                        onChange={onChange}
                        className={styles.input}
                        readOnly={readonly}
                        {...otherProps}
                    />
                </div>
                {errorText && (<Text gap="0" variant={TextVariant.ADDITIONAL} error text={errorText} />)}
            </div>
        );
    }

    return (
        <div className={clsx(styles.FieldBox, {}, [className])}>
            {label && (
                <label
                    htmlFor={placeholder}
                    className={styles.label}
                >
                    {label}
                </label>
            )}
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
                {adornment
                  && (
                      <Button
                          className={styles.endAdornment}
                          theme={ThemeButton.ICON}
                          onClick={adornmentAction}
                      >
                          {adornment}
                      </Button>
                  )}
                {isPassword && (
                    <Button
                        className={styles.eyeBtn}
                        theme={ThemeButton.ICON}
                        onClick={() => setIsPasswordShown(!isPasswordShown)}
                    >
                        {isPasswordShown ? <EyeClosed /> : <EyeOpened />}
                    </Button>
                )}

            </div>
            {errorText && (<Text gap="0" variant={TextVariant.ADDITIONAL} error text={errorText} />)}
        </div>
    );
});
