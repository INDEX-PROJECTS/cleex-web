/* eslint-disable no-useless-escape */
import {
    ChangeEvent, memo, useCallback, useRef, useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '@/shared/utils/classNames/classNames';
import styles from './DropFileInput.module.scss';

import { HStack, VStack } from '../Stack';
import {
    Text, TextAlign,
} from '../Text/Text';
import { Button, ThemeButton } from '../Button/Button';
import { Error } from '../Error/Error';
import { Mods } from '@/shared/types';

interface DropFileInputProps {
  className?: string;
  id: string;
  text?: string;
  name: string;
  onChangeText: (url: string) => void;
  onChangeFile: (file: File) => void;
}

export const DropFileInput = memo(({
    className, id, name, text, onChangeText, onChangeFile,
}: DropFileInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [isDropActive, setIsDropActive] = useState(false);

    const [error, setIsError] = useState(false);

    const [avatar, setAvatar] = useState<File>();

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [urlImage, setUrlImage] = useState<string>('');

    const [isUrlValid, setIsUrlValid] = useState(false);

    // const renderFileIcon = useCallback(
    //     (type: string) => {
    //         switch (type) {
    //         case 'image/png':
    //             return (
    //                 <PngIcon className={styles.fileIcon} />
    //             );
    //         case 'image/jpeg':
    //             return (
    //                 <JpgIcon className={styles.fileIcon} />
    //             );
    //         case 'image/svg+xml':
    //             return (
    //                 <SvgIcon className={styles.fileIcon} />
    //             );
    //         default:
    //             return <ImageIcon className={styles.fileIcon} />;
    //         }
    //     },
    //     [],
    // );

    const onDragEnter = () => {
        setIsDropActive(true);
    };

    const chooseFile = () => {
        fileInputRef.current?.click();
    };

    const onDragLeave = () => {
        setIsDropActive(false);
    };

    const onDrop = () => {
        setIsDropActive(false);
    };

    const onFileDrop = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files?.[0];

        if (newFile && newFile.type.split('/')[0] === 'image') {
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event.target && event.target.result) {
                    setSelectedImage(event.target.result as string);
                }
            };

            reader.readAsDataURL(newFile);
            setAvatar(newFile);
            onChangeFile(newFile);
        }
    };

    const validateImageUrl = (url: string): boolean => {
        // Регулярное выражение для проверки URL картинки
        const imageUrlRegex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|png|gif|bmp|wepb|svg)$/i;

        return imageUrlRegex.test(url);
    };

    const onSetUrlImage = () => {
        const isValid = validateImageUrl(urlImage);

        if (isValid) {
            setIsUrlValid(isValid);
            onChangeText(urlImage);
            setIsError(false);
        } else {
            setIsError(true);
        }
    };

    const mods: Mods = {
        [styles.active]: isDropActive,
    };

    return (
        <>
            <VStack
                className={classNames(styles.DropFileInput, mods, [className])}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                max
            >
                <VStack gap="16" max align="center" className={styles.label}>
                    <span className={styles.imageAnimation} />
                    <Text
                        title={`Перетащите ${text || 'изображение'} сюда`}
                        align={TextAlign.CENTER}
                        gap="16"
                    />
                    <Text
                        text="или нажмите на кнопку"
                        align={TextAlign.CENTER}
                        gap="16"
                    />
                    <HStack justify="center" align="center" max gap="32" className={styles.buttonWrapper}>
                        <Button onClick={chooseFile} theme={ThemeButton.DEFAULT}>
                            Выбрать файл
                        </Button>
                        <Button theme={ThemeButton.SECONDARY} helper helperText="Нажмите Ctrl + V">
                            Вставить из буфера
                        </Button>
                    </HStack>
                </VStack>
                <input
                    ref={fileInputRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp, image/svg+xml"
                    name={name}
                    id={id}
                    multiple={false}
                    className={styles.input}
                    onChange={onFileDrop}
                />
            </VStack>

            <CSSTransition
                in={error}
                timeout={300}
                unmountOnExit
                classNames="slide-animation"
            >
                <Error onClose={() => {}} error="Изображение не найдено" />
            </CSSTransition>

        </>

    );
});
