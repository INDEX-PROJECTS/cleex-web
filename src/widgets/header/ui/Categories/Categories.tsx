import { FC, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Categories.module.scss';
import MaxContainer from '@/shared/ui/MaxContainer/MaxContainer.tsx';

interface CategoriesProps {
  isOpen: boolean;
  toggleCategories: () => void;
}

const Categories: FC<CategoriesProps> = ({ isOpen, toggleCategories }) => {
    const nodeRef = useRef(null);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current?.contains(event.target as HTMLElement)) {
                toggleCategories();
            }
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                toggleCategories();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', onKey);
        } else {
            document.removeEventListener('keydown', onKey);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', onKey);
        };
    }, [isOpen, ref, toggleCategories]);

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            nodeRef={nodeRef}
            classNames={{
                enter: styles['categories-enter'],
                enterActive: styles['categories-enter-active'],
                exit: styles['categories-exit'],
                exitActive: styles['categories-exit-active'],
            }}
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.categories} ref={nodeRef}>
                <MaxContainer height="100%" className={styles.container}>
                    <div className={styles.categories_content} ref={ref}>
                        Сделать карточки категорий в entities
                    </div>
                </MaxContainer>
            </div>
        </CSSTransition>
    );
};

export default Categories;
