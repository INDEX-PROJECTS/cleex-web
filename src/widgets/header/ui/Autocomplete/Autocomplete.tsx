import { CSSTransition } from 'react-transition-group';
import {
    FC, MutableRefObject, useEffect, useRef,
} from 'react';
import styles from './Autocomplete.module.scss';
import { VStack } from '@/shared/ui/Stack';

interface AutocompleteProps {
  isOpen: boolean;
  toggleAutocomplete: () => void;
  inputRef: MutableRefObject<null>;
}

const Autocomplete: FC<AutocompleteProps> = ({
    isOpen,
    toggleAutocomplete,
    inputRef,
}) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (nodeRef.current
              && !nodeRef.current.contains(event.target as HTMLElement)
              && !inputRef.current.contains(event.target as HTMLElement)) {
                toggleAutocomplete();
            }
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                toggleAutocomplete();
            }
        };

        document.addEventListener('click', handleClickOutside);
        if (isOpen) {
            document.addEventListener('keydown', onKey);
        } else {
            document.removeEventListener('keydown', onKey);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', onKey);
        };
    }, [isOpen, nodeRef, inputRef, toggleAutocomplete]);

    return (
        <CSSTransition
            in={isOpen}
            timeout={400}
            nodeRef={nodeRef}
            classNames={{
                enter: styles['autocomplete-enter'],
                enterActive: styles['autocomplete-enter-active'],
                exit: styles['autocomplete-exit'],
                exitActive: styles['autocomplete-exit-active'],
            }}
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.autocomplete} ref={nodeRef}>
                <VStack className={styles.wrapper}>
                    <div>Сделать карточки автокомплита в entities</div>
                </VStack>
            </div>
        </CSSTransition>
    );
};

export default Autocomplete;
