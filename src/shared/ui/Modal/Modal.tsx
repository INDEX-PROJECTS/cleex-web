import {
    useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from '@/shared/utils/classNames/classNames';
import type { ReactNode, MouseEvent } from 'react';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  isNotification: boolean;
  onClose?: () => void;
  portal: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
    const {
        className, children, isNotification, isOpen, lazy, onClose, portal,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const [isOpening, setIsOpening] = useState(false);

    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpening,
        [styles.isClosing]: isClosing,
        [styles.notification]: isNotification,
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }

        return () => setIsMounted(false);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            timeRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            setIsOpening(false);
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    if (portal) {
        return (
            <Portal>
                <div className={classNames(styles.Modal, mods, [])}>
                    <div
                        className={styles.overlay}
                        onClick={closeHandler}
                    >
                        <div
                            className={classNames(styles.content, {}, [className])}
                            onClick={onContentClick}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        );
    }

    return (
        <div className={classNames(styles.Modal, mods, [])}>
            <div
                className={styles.overlay}
                onClick={closeHandler}
            >
                <div
                    className={classNames(styles.content, {}, [className])}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
