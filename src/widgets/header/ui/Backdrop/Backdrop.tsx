import { CSSTransition } from 'react-transition-group';
import { FC, useRef } from 'react';
import styles from './Backdrop.module.scss';

interface BackdropProps {
  isOpen: boolean;
}

const Backdrop: FC<BackdropProps> = ({ isOpen }) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            in={isOpen}
            timeout={400}
            nodeRef={nodeRef}
            classNames={{
                enter: styles['backdrop-enter'],
                enterActive: styles['backdrop-enter-active'],
                exit: styles['backdrop-exit'],
                exitActive: styles['backdrop-exit-active'],
            }}
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.backdrop} ref={nodeRef} />
        </CSSTransition>
    );
};

export default Backdrop;
